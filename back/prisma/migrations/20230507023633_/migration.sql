/*
  Warnings:

  - A unique constraint covering the columns `[mnemonic]` on the table `wallets` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "wallets" ADD COLUMN     "mnemonic" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "wallets_mnemonic_key" ON "wallets"("mnemonic");
