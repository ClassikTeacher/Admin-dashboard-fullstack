const Router = require('express')
const departmentController = require('../controllers/DepartmentController')
const employeeController = require('../controllers/EmpoyeeCoontroller')

const router = new Router()

router.get('/alldepartments', departmentController.getAllDepartments)
router.get('/department', departmentController.getDepartment)
router.post('/department', departmentController.addDepartment)
router.delete('/department', departmentController.deleteDepartment)
router.get('/allemployees', employeeController.getAllEmployees)
router.get('/employee', employeeController.getEmployee)
router.post('/employee', employeeController.addEmployee)
router.delete('/employee', employeeController.deleteEmployee)

module.exports = router
export{}