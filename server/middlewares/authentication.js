const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const User = require('../models/user'); // Replace with your User model
const { JWT_SECRET } = process.env.JWT_SECRET; // Your JWT secret

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

// Configure JWT strategy
passport.use(
  new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
      // Check if the user with the provided ID exists
      const user = await User.findById(payload.sub);

      if (!user) {
        return done(null, false);
      }

      // User found, proceed with authentication
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);

// Middleware to protect routes requiring authentication
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = { requireAuth };
