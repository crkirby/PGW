const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const usersService = require('../users/services/usersService');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await usersService.getUser(id)
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/google/redirect'
},
    async (_accessToken, _refreshToken, profile, done) => {
        const userExists = await usersService.getUserByGoogleId(profile.id)
        if (userExists) {
            console.log('this -> : ', userExists);
            done(null, userExists);
        } else {
            const newUser = await usersService.createUser(profile)
            console.log('created new user: ', newUser);
            done(null, newUser);
        }
    })
);
