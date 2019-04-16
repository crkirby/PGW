const passport = require('passport')

exports.withGoogleCode = passport.authenticate('google')

exports.withGoogleScope = passport.authenticate('google', {
  scope: ['profile']
})