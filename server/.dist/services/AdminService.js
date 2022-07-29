"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const AdminDto = require("../dto/adminDto");
const client_1 = require("@prisma/client");
const tokenServise = require("./TokenService");
const prisma = new client_1.PrismaClient();
class AdminService {
  registration(login, password) {
    return __awaiter(this, void 0, void 0, function* () {
      const candidate = yield prisma.admins.findFirst({
        where: {
          login,
        },
      });
      if (candidate) {
        throw new Error(`A user with the same email:${login} already exists`);
      }
      const hashPassword = yield bcrypt.hash(password, 10);
      const tokens = tokenServise.generationToken({ login, hashPassword });
      const admin = yield prisma.admins.create({
        data: {
          login: login,
          password: hashPassword,
          refresh_token: tokens.refreshToken,
        },
      });
      return Object.assign(Object.assign({}, tokens), { admin });
    });
  }
  login(login, password) {
    return __awaiter(this, void 0, void 0, function* () {
      const admin = yield prisma.admins.findFirst({
        where: {
          login: login,
        },
      });
      if (!admin) {
        throw new Error("user with so email no found");
      }
      const isPassEqals = yield bcrypt.compare(password, admin.password);
      if (!isPassEqals) {
        throw new Error("wrong password");
      }
      const hashPassword = yield bcrypt.hash(password, 10);
      const adminDto = new AdminDto(admin);
      const tokens = tokenServise.generationToken({ login, hashPassword });
      yield tokenServise.updateToken(admin.id, tokens.refreshToken);
      return Object.assign(Object.assign({}, tokens), { admin: adminDto });
    });
  }
  logout(refreshToken) {
    return __awaiter(this, void 0, void 0, function* () {
      const token = yield tokenServise.removeToken(refreshToken);
      return token;
    });
  }
  refresh(refreshToken) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!refreshToken) {
        throw new Error("");
      }
      const tokenValid = tokenServise.validRefreshToken(refreshToken);
      const adminData = yield tokenServise.findByToken(refreshToken);
      if (!adminData.refresh_token || !tokenValid) {
        throw new Error("invalid refresh token");
      }
      const login = adminData.login;
      const hashPassword = adminData.password;
      const tokens = tokenServise.generationToken({ login, hashPassword });
      const admin = tokenServise.updateToken(adminData.id, tokens.refreshToken);
      const adminDto = new AdminDto(adminData);
      return Object.assign(Object.assign({}, tokens), { admin: adminDto });
    });
  }
}
module.exports = new AdminService();
//# sourceMappingURL=AdminService.js.map
