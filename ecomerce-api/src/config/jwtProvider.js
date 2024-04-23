const jwt = require("jsonwebtoken")

const secret_key = "djsafljaldjflajflasjldjflajljdlfjalsdfj"

const generateToken = (userId)=>{
    const token = jwt.sign(userId, secret_key, {expiresIn:'48h'})
    return token
}

const getUserIdFromToken = (token) =>{
    const decoded = jwt.verify(token,secret_key)
    return decoded.userId;
}

module.exports = {generateToken, getUserIdFromToken}