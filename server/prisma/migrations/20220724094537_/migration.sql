/*
  Warnings:

  - You are about to drop the `Admins` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Admins";

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "login" VARCHAR(30) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "refresh_token" VARCHAR(50) NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_login_key" ON "admins"("login");

-- CreateIndex
CREATE UNIQUE INDEX "admins_refresh_token_key" ON "admins"("refresh_token");
