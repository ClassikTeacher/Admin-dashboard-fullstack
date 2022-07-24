-- CreateTable
CREATE TABLE "Admins" (
    "id" SERIAL NOT NULL,
    "login" VARCHAR(30) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "refresh_token" VARCHAR(50) NOT NULL,

    CONSTRAINT "Admins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admins_login_key" ON "Admins"("login");

-- CreateIndex
CREATE UNIQUE INDEX "Admins_refresh_token_key" ON "Admins"("refresh_token");
