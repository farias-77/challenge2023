import { Request, Response } from "express";
import { TUser } from "./../types/userTypes";

import * as userServices from "./../services/authServices";

export async function signUp(req: Request, res: Response) {
    const user: TUser = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
    };
    const confirmPassword: string = req.body.confirmPassword;

    userServices.validateConfirmPassword(user.password, confirmPassword);
    await userServices.validateNewEmail(user.email);
    const createdUser = await userServices.insertUser(user);

    //insert wallet creation here

    res.status(201).send("Usuário criado com sucesso!");
}

export async function signIn(req: Request, res: Response) {
    const user: TUser = req.body;

    const { id } = await userServices.validatePassword(user);
    const token: string = await userServices.generateToken(user.email);

    res.status(200).send({ id, token });
}
