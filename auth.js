const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;   // Basic strategy for HTTP auth
const person = require('./Scemas/person');
const bcrypt= require('bcrypt');
// Passport strategy setup for Basic Authentication
passport.use(new BasicStrategy(async (username, password, done) => {
    try {
        const user = await person.findOne({ username: username });
        if (!user) {
            return done(null, false, { message: 'Incorrect username' });
        }

        // Make sure to `await` the result of comparepassword
        const passwordMATCH = await user.comparepassword(password);
        if (passwordMATCH) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect password' });
        }
    } catch (err) {
        return done(err);
    }
}));

passport.use(passport.initialize());   // It is required for use in server.js
const authenticated = passport.authenticate('basic', { session: false });

// Export both passport and authenticated middleware
module.exports = { passport, authenticated };
