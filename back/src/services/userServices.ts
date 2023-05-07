import { JsonRpcProvider, Contract } from "ethers";
import { decryptsKey } from "../services/authServices";
import jsonAbi from "../utils/btgDolAbi.json";
import { AbiItem } from "web3-utils";
import Web3 from "web3";

export async function getBtgDolBalance(
    publicAddress: string,
    privateKey: string
) {
    try {
        const providerUrl = process.env.WEB3_PROVIDER || "";
        const provider = new JsonRpcProvider(providerUrl, 80001);
        const contract = new Contract(
            process.env.BTGDOL_CONTRACT || "",
            JSON.parse(process.env.BTGDOL_JSON_INTERFACE || ""),
            provider
        );
        const balance = await contract.balanceOf(publicAddress);
        return (balance / BigInt(10 ** 6)).toString();
    } catch (err) {
        console.log(err);
    }
}

export async function interactWithContract(
    destinationAddress: string,
    amount: number,
    originPrivateKey: string
) {
    const web3 = new Web3(process.env.WEB3_PROVIDER || "");
    const erc20AbiItems: AbiItem[] = jsonAbi as AbiItem[];
    const contractAddress: string = process.env.BTGDOL_CONTRACT || "";

    try {
        const account = web3.eth.accounts.privateKeyToAccount(
            decryptsKey(originPrivateKey)
        );
        web3.eth.accounts.wallet.add(account);

        const contract = new web3.eth.Contract(erc20AbiItems, contractAddress);

        const decimals = await contract.methods.decimals().call();
        const tokenAmount = BigInt(amount * 10 ** decimals);

        const gasPrice = await web3.eth.getGasPrice();
        const nonce = await web3.eth.getTransactionCount(account.address);

        const estimatedGas = await contract.methods
            .transfer(destinationAddress, tokenAmount)
            .estimateGas({ from: account.address });

        const transaction = {
            to: contractAddress,
            data: contract.methods
                .transfer(destinationAddress, tokenAmount)
                .encodeABI(),
            gas: estimatedGas, // Add the "gas" field here
            gasPrice: gasPrice,
            nonce: nonce,
        };

        const signedTransaction = await web3.eth.accounts.signTransaction(
            transaction,
            decryptsKey(originPrivateKey)
        );

        if (signedTransaction.rawTransaction) {
            const receipt = await web3.eth.sendSignedTransaction(
                signedTransaction.rawTransaction
            );

            console.log(
                `Transaction successful, tx hash: ${receipt.transactionHash}`
            );
        } else {
            console.error("Raw transaction not available");
        }
    } catch (error) {
        console.log(error);
        throw {
            type: "internal server error",
            message: `Transaction failed: ${error}`,
        };
    }
}
