
class DepartmentController {
    async getAllDepartments(req:any, res:any, next:Function){
        try{
            const body =req.body
            const headers = req.headers

            res.json(body)
        }catch(e){

        }
    }

    async addDepartment(req:any, res:any, next:Function){
        try{
            const body =req.body
            const headers = req.headers

            res.json(body)
        }catch(e){

        }
    }

    async deleteDepartment(req:any, res:any, next:Function){
        try{
            const body =req.body
            const headers = req.headers

            res.json(body)
        }catch(e){

        }
    }
}

module.exports = new DepartmentController()