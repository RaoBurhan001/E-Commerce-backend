const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const {userService} = require("../services/index")
const config = require("./config");
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.get('jwt.secret'),
};

const jwtVerify = async (payload, done) => {
  try {
    const user = await userService.getUserFromToken(payload);
    if (user) {
      return done(null, user);  // no error and we have the user
    }else{
      return done(null,false) // no error and we dont have the user
    }
  } catch (error) {
    return done(error, false); // error and dont have the user
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};
