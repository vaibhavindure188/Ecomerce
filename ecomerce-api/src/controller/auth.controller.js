const jwtProvider = require("../config/jwtProvider.js");
const userService = require("../services/user.service.js");
const bcrypt = require("bcrypt");
const cartService = require("../services/cart.service.js");

const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const jwt = jwtProvider.generateToken(user._id);
    await cartService.createCart(user._id);
    return res.status(200).send({ jwt, message: "registration success" });
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
};

const login = async(req, res) => {
  try {
    const { email, passward } = req.body;
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res
        .status(403)
        .send({ message: "user is not present with email", email });
    }

    const isPasswardValid = bcrypt.compare(passward, user.passward);
    if (!isPasswardValid) {
      return res.status(402).send({ message: "Invalid passward..." });
    }
    const jwt = jwtProvider.generateToken(user._id);
    return res.status(200).send({ jwt, message: "login Success" }); // if we are having same key value data then we can write it as one
  } catch (e) {
    return res.status(401).send({ error: e.message });
  }
};

module.exports = { register, login };
