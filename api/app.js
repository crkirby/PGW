const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport')
const authRoutes = require('./users/routes/auth')
const productRoutes = require('./products/routes')
require('./config/passport-setup')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRoutes)
app.use('/products', productRoutes)

app.set('view engine', 'ejs')

module.exports = app
