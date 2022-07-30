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
const adminService = require("../services/AdminService");
const { validationResult } = require("express-validator");
class UserController {
    registration(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return next(new Error("Error is validation"));
                }
                const { login, password } = req.body;
                const userData = yield adminService.registration(login, password);
                res.cookie("refreshToken", userData.refreshToken, {
                    maxAge: 24 * 60 * 60 * 1000,
                    httpOnly: true,
                });
                return res.json(userData);
            }
            catch (e) {
                next(e);
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, password } = req.body;
                const userData = yield adminService.login(login, password);
                res.cookie("refreshToken", userData.refreshToken, {
                    maxAge: 24 * 60 * 60 * 1000,
                    httpOnly: true,
                });
                return res.json(userData);
            }
            catch (e) {
                next(e);
            }
        });
    }
    logout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.cookies;
                const token = yield adminService.logout(refreshToken);
                res.clearCookie("refreshToken");
                return res.json(`200  ${token}`);
            }
            catch (e) {
                next(e);
            }
        });
    }
    refresh(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.cookies;
                const userData = yield adminService.refresh(refreshToken);
                res.cookie("refreshToken", userData.refreshToken, {
                    maxAge: 24 * 60 * 60 * 1000,
                    httpOnly: true,
                });
                res.json(userData);
            }
            catch (e) {
                next(e);
            }
        });
    }
    getAdminPage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = "Admin page";
                return res.json(users);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
module.exports = new UserController();
//# sourceMappingURL=AdminController.js.map