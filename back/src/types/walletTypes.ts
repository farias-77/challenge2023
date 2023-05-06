import { Wallets } from "@prisma/client";

export type TWallet = Omit<Wallets, "id" | "createdAt">;
