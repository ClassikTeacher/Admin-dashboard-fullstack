const Router = require('express')
const departmentController = require('../controllers/DepartmentController')

const router = new Router()

router.get('/alldepartments', departmentController.getAllDepartments)
router.post('/department', departmentController.addDepartment)
router.delete('/department', departmentController.deleteDepartment)

module.exports = router
export{}