"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class TokenService {
    generationToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '1m' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '1d' });
        return {
            accessToken,
            refreshToken
        };
    }
    updateToken(id, refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield prisma.admins.findFirst({
                where: { id: id }
            });
            if (!tokenData) {
                throw new Error('undefiend admin');
            }
            const admin = yield prisma.admins.update({
                where: {
                    id: id
                },
                data: {
                    refresh_token: refreshToken
                }
            });
            return admin;
        });
    }
    removeToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield prisma.admins.update({
                where: { refresh_token: refreshToken },
                data: {
                    refresh_token: ''
                }
            });
            return tokenData;
        });
    }
    findByToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const adminData = yield prisma.admins.findFirst({
                where: {
                    refresh_token: refreshToken
                }
            });
            return adminData;
        });
    }
    validRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        }
        catch (e) {
            return null;
        }
    }
    validAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        }
        catch (e) {
            return null;
        }
    }
}
module.exports = new TokenService();
//# sourceMappingURL=TokenService.js.map