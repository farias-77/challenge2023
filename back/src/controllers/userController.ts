import { Wallets } from "@prisma/client";
import { Request, Response } from "express";

import * as userServices from "../services/userServices";
import * as walletServices from "../services/walletService";

export async function getUserData(req: Request, res: Response) {
    const userId: number = Number(res.locals.retornoJwtVerify.id);

    const wallet = await walletServices.getWalletById(userId);
    const balance = await userServices.getBtgDolBalance(
        wallet.publicAddress,
        wallet.privateKey
    );
    const iof = Number(process.env.IOF);
    const dollar = Number(process.env.DOLLAR);

    const response = {
        balance,
        iof,
        dollar,
    };

    return res.status(200).send(response);
}

export async function transferTokens(req: Request, res: Response) {
    const userId: number = Number(res.locals.retornoJwtVerify.id);
    7;

    const originWallet: Wallets = await walletServices.getWalletById(userId);
    const destinationWallet: Wallets = await walletServices.getWalletByPublic(
        req.body.publicAddress
    );

    const transferOnChain = await userServices.interactWithContract(
        destinationWallet.publicAddress,
        req.body.amount,
        originWallet.privateKey
    );

    res.status(200).send("Transferência realizada com sucesso!");
}
