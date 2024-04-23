const userService = require('../services/user.service.js')

const getUserProfile = async(req, res) =>{
    try{const jwt = req.headers.authorization?.split(" ")[1]
    if(!jwt) return res.status(404).send({error:"token not found"})

    const user = await userService.getUserProfileByToken(jwt)
    return res.status(200).send(user)}
    catch(e){
        return res.status(405).send({error:e.message})
    }
}

const getAllUsers  = async(req, res) =>{
    try{const users = await userService.getUsers()
    return res.status(200).send(users)}
    catch(e){
        return res.status(406).send({error: e.message})
    }
}

module.exports = {getAllUsers, getUserProfile}