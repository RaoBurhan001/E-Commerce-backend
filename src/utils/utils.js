const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");
/**
 * Generate the jwt token when the user logs in
 * @param {object} user
 * @return {object} jwt token
 */
const issueJWT = (user) => {
  const id = user.id;
  const expiresIn = "1d";
  const payload = {
    id: id,
    iat: Date.now(),
  };
  const signedToken = jwt.sign(payload, "jwt_simple_secret", {
    expiresIn: expiresIn,
  });
  return {
    token: "Bearer " + signedToken,
    expiresIn: expiresIn,
  };
};

/**
 * Generate the password based on the entered password
 * @param {string} password
 * @returns {object} salt and passwordHash
 */
const generatePassowrd = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);
  return {
    salt: salt,
    passwordHash: passwordHash,
  };
};

/**
 * checks if the user with the same emal exists
 * @param {string} email
 * @returns {Promise <User>}
 */
const isEmailTaken = async function (email) {
  try {
    const user = await User.query().findOne({ email });
    return user;
  } catch (err) {
    throw err;
  }
};

/**
 * Compare Passwords
 * @param {string} enteredPassword
 * @param {string} userPassword
 * @returns {boolean}
 */
const comparePassword = async(enteredPassword, userPassword) => {
  return await bcrypt.compare(enteredPassword, userPassword);
};

module.exports = {
  issueJWT,
  generatePassowrd,
  isEmailTaken,
  comparePassword,
};
