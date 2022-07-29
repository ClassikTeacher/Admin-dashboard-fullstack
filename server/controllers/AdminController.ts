import { NextFunction, Request, Response } from "express";

const adminService = require("../services/AdminService");
const { validationResult } = require("express-validator");

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new Error("Error is validation"));
      }
      const { login, password } = req.body;

      const userData = await adminService.registration(login, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { login, password } = req.body;
      const userData = await adminService.login(login, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;
      const token = await adminService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(`200  ${token}`);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await adminService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async getAdminPage(req: Request, res: Response, next: NextFunction) {
    try {
      const users = "Admin page";
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
