import * as userRepositories from "../repositories/userRepository";
import { TUser } from "../types/userTypes";
import { Users } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function getUserById(userId: number) {
    const user: Users | null = await userRepositories.getUserById(userId);

    if (!user) {
        throw {
            type: "not found",
            message: "Não encontramos um usuário com esse id.",
        };
    }

    return user;
}

export async function getUserByEmail(email: string) {
    const user: Users | null = await userRepositories.getUserByEmail(email);

    if (!user) {
        throw {
            type: "not found",
            message: "Não encontramos um usuário com esse email.",
        };
    }

    return user;
}

export function validateConfirmPassword(
    password: string,
    confirmPassword: string
) {
    if (password !== confirmPassword) {
        throw {
            type: "unauthorized",
            message: "A senha e a confirmação de senha devem ser iguais",
        };
    }

    return true;
}

export async function validateNewEmail(email: string) {
    const user: Users | null = await userRepositories.getUserByEmail(email);

    if (user) {
        throw {
            type: "unauthorized",
            message: "Já existe um usuário com esse email",
        };
    }

    return true;
}

export async function insertUser(user: TUser): Promise<Users> {
    const encryptedUser: TUser = {
        ...user,
        password: await encryptsPassword(user.password),
    };

    return await userRepositories.insertUser(encryptedUser);
}

export async function validatePassword(userBody: TUser): Promise<Users> {
    const userDatabase: Users = await getUserByEmail(userBody.email);

    if (!(await bcrypt.compare(userBody.password, userDatabase.password))) {
        throw { type: "unauthorized", message: "Credenciais inválidas." };
    }

    return userDatabase;
}

export async function generateToken(email: string): Promise<string> {
    const user: Users | null = await getUserByEmail(email);

    const secretKey: string = String(process.env.JWT_SECRET);
    const token: string = user ? jwt.sign({ id: user.id }, secretKey) : "";

    return token;
}

async function encryptsPassword(password: string): Promise<string> {
    const SALT: number = 10;
    const encryptedPassword: string = await bcrypt.hash(password, SALT);

    return encryptedPassword;
}
