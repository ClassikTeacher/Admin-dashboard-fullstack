

class EmployeeController {
    async getAllEmployees(req:any, res:any, next:Function){
        try{
            const body =req.body
            const headers = req.headers

            res.json(body)
        }catch(e){

        }
    }

    async addEmployee(req:any, res:any, next:Function){
        try{
            const body =req.body
            const headers = req.headers

            res.json(body)
        }catch(e){

        }
    }

    async deleteEmployee(req:any, res:any, next:Function){
        try{
            const body =req.body
            const headers = req.headers

            res.json(body)
        }catch(e){

        }
    }
}

module.exports = new DepartmentController()