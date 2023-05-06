import { prisma } from "../config/database";
import { Wallets } from "@prisma/client";
import { TWallet } from "./../types/walletTypes";

export async function insertWallet(wallet: TWallet) {
    return await prisma.wallets.create({
        data: wallet,
    });
}

export async function getWalletByUserId(
    userId: number
): Promise<Wallets | null> {
    return await prisma.wallets.findFirst({
        where: {
            userId,
        },
    });
}
