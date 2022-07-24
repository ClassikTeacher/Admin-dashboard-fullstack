const jwt = require('jsonwebtoken')
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class TokenService{
    generationToken(payload: Object){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '1m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '1d'})
        return{
            accessToken,
            refreshToken
        } 
    }

    async updateToken(id: number, refreshToken: string){
        const tokenData = await prisma.admins.findFirst({
            where:
            {id: id}})

        if (!tokenData) {
            throw new Error('undefiend admin')
        }
        const admin = await prisma.admins.update({
            where:{
                id: id
            },
            data :{
                refresh_token: refreshToken
            }
        })
        return admin
        
    }

    async removeToken(refreshToken: string){
        const tokenData = await prisma.admins.update({
            where:{refresh_token:refreshToken},
            data: {
                refresh_token: ''
            }
        })
        return tokenData
    }

    async findByToken(refreshToken: string){
        const adminData = await prisma.admins.findFirst({
            where: {
                refresh_token: refreshToken
            }
        })
        return adminData
    }

    validRefreshToken(token: string){
        try{
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return userData
        } catch(e) {
            return null
        }
    }

    validAccessToken(token: string){
        try{
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData
        } catch(e) {
            return null
        }
    }
}

module.exports = new TokenService()