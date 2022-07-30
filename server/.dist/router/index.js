"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("express");
const departmentController = require("../controllers/DepartmentController");
const employeeController = require("../controllers/EmpoyeeCoontroller");
const { body } = require("express-validator");
const cors = require("cors");
const adminController = require("../controllers/AdminController");
const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();
const options = {
    credentials: true,
    origin: process.env.CLIENT_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204,
};
router.get("/alldepartments", departmentController.getAllDepartments);
router.get("/department/:id", departmentController.getDepartment);
router.post("/department", departmentController.addDepartment);
router.delete("/department/:id", cors(options), departmentController.deleteDepartment);
router.get("/allemployees", employeeController.getAllEmployees);
router.get("/employee/:id", employeeController.getEmployee);
router.post("/employee", employeeController.addEmployee);
router.delete("/employee/:id", cors(options), employeeController.deleteEmployee);
router.post("/registration", body("password").isLength({ min: 4, max: 24 }), adminController.registration);
router.post("/login", adminController.login);
router.post("/logout", adminController.logout);
router.get("/refresh", adminController.refresh);
router.get("/adminpage", authMiddleware, adminController.getAdminPage);
module.exports = router;
//# sourceMappingURL=index.js.map