import Web3 from "web3";
import { JsonRpcProvider, Contract } from "ethers";

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
