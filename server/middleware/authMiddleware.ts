
const tokenServise = require('../services/TokenService')


module.exports = function (req:any, res:any, next:Function){
    try{
        const authorizationHeader = req.headers.authorization
        if(!authorizationHeader){
            return next(new Error('user un authrized'))
        }
        const accessToken = authorizationHeader.split(' ')[1]
        if(!accessToken){
            return next(new Error('user un authrized')) 
        }

        const userData = tokenServise.validAccessToken(accessToken)
        if(!userData){
            return next(new Error('user un authrized!')) 
        }
        req.user = userData
        next()
    } catch{
        return next(new Error('user un authrized'))
    }
}