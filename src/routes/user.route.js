const express = require ('express')
const router = express.Router()
const passport = require('passport')
const  { userController} = require ('../controllers/index')

router.route('/').post(userController.createUser)
router.route('/login').post(userController.loginUser)
router.route('/getUser').get(
    passport.authenticate('jwt', { session: false }), 
    userController.getUser
  );
  
module.exports=router