
const { userService } = require('../services/index')
/**
 * create user in the database
 * @param {*} req 
 * @param {*} res 
 * @returns {Array<User>}
 */
/**
 * create a new user with the given email and password and sends a JSON response with the user object.
 * @async
 * @function
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} A Promise that resolves when the JSON response is sent.
 * @throws {Error} If there is an error while logging in.
 */
const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    return res.status(200).json({ user });
  } catch (err) {
    return err.message;
  }
};
/**
 * Logs in a user with the given email and password and sends a JSON response with the user object.
 * @async
 * @function
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} A Promise that resolves when the JSON response is sent.
 * @throws {Error} If there is an error while logging in.
 */
const loginUser = async(req,res)=>{
  try{
const user = await userService.loginUser(req.body)
return res.status(200).json({ user });
  }catch(err){
    return err.message;
  }
}

const getUser = async(req,res)=>{
  try{
const user = await userService.getUser(req.body)
return res.status(200).json({ user });
  }catch(err){
    return err.message;
  }
}



module.exports={
    createUser,
    loginUser,
    getUser
}