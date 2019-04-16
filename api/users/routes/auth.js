const router = require('express').Router()
const usersController = require('../controllers/usersController')
const authMiddleware = require('./middlewares/authMiddleware')

router.get('/logout', usersController.logout)

router.get('/google', authMiddleware.withGoogleScope)

router.get('/google/redirect', [
  authMiddleware.withGoogleCode, usersController.profile
])

module.exports = router
