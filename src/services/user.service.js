const { User } = require("../models");
const bcrypt = require("bcrypt");
const {
  issueJWT,
  generatePassowrd,
  isEmailTaken,
  comparePassword,
} = require("../utils/utils");
/**
 * create a user in the db inser trecord
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  try {
    console.log("user" , userBody)
    if (await isEmailTaken({ email: userBody.email })) {
      throw new Error("Email already taken");
    }
    const password = await generatePassowrd(userBody.password);
    userBody.salt = password.salt;
    userBody.password_hash = password.passwordHash;
    delete userBody.password;
    const user = await User.query().insert(userBody);
    return user;
  } catch (err) {
    return err.message;
  }
};
/**
 * login the user with correct email and password
 * @param {object} userBody
 * @returns{Promise<User>}
 */
const loginUser = async (userBody) => {
  try {
    const user = await User.query().findOne({ email: userBody.email });
    console.log("user" , user)
    if (!user) {
      return "Invalid email or password";
    }
    const passwordMatch = await comparePassword(
      userBody.password,
      user.password_hash
    );
    if (!passwordMatch) {
      return "Invalid email or password";
    }
    const token = issueJWT(user);
    return token;
  } catch (err) {
    return err;
  }
};
/**
 * Extract the user from the token
 * @param {object} userBody 
 * @returns{Promise<User>}
 */
const getUserFromToken = async (userBody) => {
  try {
    const user = await User.query().findOne({ id: userBody.id });
    return user;
  } catch (err) {
    return err;
  }
};
const getUser = async (userBody) => {
  try {
    const user = await User.query();
    return user;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createUser,
  loginUser,
  getUserFromToken,
  getUser,
};
