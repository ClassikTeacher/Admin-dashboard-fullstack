const bcrypt = require('bcrypt')
const AdminDto = require('../dto/adminDto')
import { PrismaClient } from '@prisma/client'

const tokenServise = require('./TokenService')


const prisma = new PrismaClient()
    
class AdminService{
    async registration(login: string, password: string){
        const candidate = await prisma.admins.findFirst({
            where: {
                 login 
            }

        })
        if(candidate){
            throw new Error(`A user with the same email:${login} already exists`)
        }
        const hashPassword = await bcrypt.hash(password, 10)

        const tokens = tokenServise.generationToken({login, hashPassword})
        const admin = await prisma.admins.create({
             data:{
                login: login, 
                password: hashPassword,
                refresh_token: tokens.refreshToken
            }})
        


        return {
            ...tokens, 
            admin
        }
        
    }   

    async login(login: string, password: string){
        const admin = await prisma.admins.findFirst({
            where: {
                login: login
            }
        })
        if(!admin){
            throw new Error('user with so email no found')
        }
        const isPassEqals = await bcrypt.compare(password, admin.password)
        if(!isPassEqals){
            throw new Error('wrong password')
             }
        const hashPassword = await bcrypt.hash(password, 10)
        const adminDto = new AdminDto(admin)
        const tokens = tokenServise.generationToken({login, hashPassword})
        await tokenServise.updateToken(admin.id, tokens.refreshToken)
        return {
             ...tokens, 
           admin: adminDto
        }
       
    }

    async logout(refreshToken: string){
        const token = await tokenServise.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken: string){
        if(!refreshToken){
            throw new Error("")
        }
        const tokenValid = tokenServise.validRefreshToken(refreshToken)
        const adminData = await tokenServise.findByToken(refreshToken)
        if(!adminData.refresh_token || !tokenValid){
            throw new Error('invalid refresh token')
        }
        
        const login = adminData.login
        const hashPassword = adminData.password
        const tokens = tokenServise.generationToken({login, hashPassword})
        const admin = tokenServise.updateToken(adminData.id, tokens.refreshToken)
        const adminDto = new AdminDto(adminData)
        return {
             ...tokens, 
            admin: adminDto
        }

    }
}

module.exports = new AdminService()