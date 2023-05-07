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

    return res.sendStatus(200);
}
