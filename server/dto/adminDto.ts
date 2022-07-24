module.exports =class AdminDto {
    login: string;
    id: number
    password: string

    constructor(model: any){
        this.id = model.id
        this.login = model.login
        this.password = model.password
    }
}