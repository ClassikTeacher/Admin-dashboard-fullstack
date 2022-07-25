const Router = require('express')
const departmentController = require('../controllers/DepartmentController')
const employeeController = require('../controllers/EmpoyeeCoontroller')
const { body }= require('express-validator')
const adminController = require('../controllers/AdminController')
const authMiddleware =require('../middleware/authMiddleware')

const router = new Router()

router.get('/alldepartments', departmentController.getAllDepartments)
router.get('/department/:id', departmentController.getDepartment)
router.post('/department', departmentController.addDepartment)
router.delete('/department/:id', departmentController.deleteDepartment)
router.get('/allemployees', employeeController.getAllEmployees)
router.get('/employee/:id', employeeController.getEmployee)
router.post('/employee', employeeController.addEmployee)
router.delete('/employee/:id', employeeController.deleteEmployee)

router.post('/registration',
        body('password').isLength({min:4, max:24}),
        adminController.registration)
router.post('/login', adminController.login)
router.post('/logout', adminController.logout)
router.get('/refresh', adminController.refresh)
router.get('/adminpage', authMiddleware, adminController.getAdminPage)

module.exports = router
export{}