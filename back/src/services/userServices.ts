import Web3 from "web3";
import { JsonRpcProvider, Contract } from "ethers";
import { decryptsKey } from "../services/authServices";

export async function getBtgDolBalance2(publicAddress: string) {
    const provider = process.env.WEB3_PROVIDER || "";
    const btgDolContractAddress = process.env.BTGDOL_CONTRACT || "";
    const jsonInterface: any = process.env.BTGDOL_JSON_INTERFACE || "";

    const web3 = new Web3(provider);
    const btgDolContract = new web3.eth.Contract(
        JSON.parse(jsonInterface),
        btgDolContractAddress
    );

    const balance = await btgDolContract.methods
        .balanceOf(publicAddress)
        .call();
    return balance / Math.pow(10, 6);
}

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
    console.log("key " + decryptsKey(originPrivateKey));

    try {
        const account = web3.eth.accounts.privateKeyToAccount(
            decryptsKey(originPrivateKey)
        );
        web3.eth.accounts.wallet.add(account);

        const weiAmount = web3.utils.toWei(amount.toString(), "ether");
        const gasPrice = await web3.eth.getGasPrice();
        const nonce = await web3.eth.getTransactionCount(account.address);

        const transaction = {
            to: destinationAddress,
            value: weiAmount,
            gas: 21000,
            gasPrice: gasPrice,
            nonce: nonce,
        };

        const signedTransaction = await web3.eth.accounts.signTransaction(
            transaction,
            originPrivateKey
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
