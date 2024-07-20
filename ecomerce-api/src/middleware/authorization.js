
const jwtProvider = require('../config/jwtProvider.js')
const userService = require('../services/user.service.js')

const authorization = async(req, res, next) =>{
    try{
        console.log('in autorization')
        const token = req.headers.authorization?.split(" ")[1];
        if(!token) {
            console.log('token not found in')
            return res.status(401).send("token not found")
        }
        const userId = await jwtProvider.getUserIdFromToken(token)
        const user = await userService.getUserByUserId(userId)
        req.user = user;
        next()
    }
    catch(e){
        console.log(e.message)
        return res.status(500).send({error : e.message})
    }
}

module.exports = authorization