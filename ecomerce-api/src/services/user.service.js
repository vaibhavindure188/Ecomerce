const User = require("../models/user.module");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js");


const createUser = async(userData) => {
  try {
    const { firstName, lastName, email, passward } = userData;

    const isUserExists =  User.findOne({email:email});
    if (isUserExists) {
      throw new Error("user is already present with email:" + email);
    }
    passward = await bcrypt.hash(passward, 8);
    const user = await User.create({ firstName, lastName, email, passward });
    return user;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getUserByUserId = async (userId) => {
  try {
    const user = await User.findById(userId).populate("address");
    if (!user) {
      throw new Error("No user found with id", userId);
    }
    return user;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("No user found with email "+ email);
    }
    return user;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await getUserByUserId(userId);
    if (!user) {
      throw new Error("User not found with user id ", userId);
    }
    return user;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserByUserId,
  getUserProfileByToken,
  getUsers,
};
