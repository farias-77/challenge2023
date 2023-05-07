import * as walletRepository from "../repositories/walletRepository";

export async function getWalletById(id: number) {
    const wallet = await walletRepository.getWalletByUserId(id);

    if (!wallet) {
        throw {
            type: "not_found",
            message: "Wallet not found",
        };
    }

    return wallet;
}

export async function getWalletByPublic(publicAddress: string) {
    const wallet = await walletRepository.getWalletByPublic(publicAddress);

    if (!wallet) {
        throw {
            type: "not_found",
            message: "Carteira não encontrada",
        };
    }
    console.log(wallet);
    return wallet;
}
