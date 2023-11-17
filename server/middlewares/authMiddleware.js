const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
require('dotenv').config();

const User = require('../models/user');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
      const user = await User.findById(payload.sub);

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);

// Export the requireAuth middleware function
const requireAuth = (req, res, next) => {
  // Use passport to authenticate the request
  passport.authenticate('jwt', { session: false })(req, res, next);
};

module.exports = { requireAuth };
