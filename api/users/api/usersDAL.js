const mongoose = require('mongoose')
const User = require('../models/user')
require('dotenv').config()

const usersDal = {
  createUser: async (userOptions) => {
    try {
      await connectDatabase({ useNewUrlParser: true })
      const newUser = await User.create(userOptions)
      await disconnectDatabase()
      return newUser
    } catch (e) {
      return e
    }
  },

  getUser: async (id) => {
    try {
      await connectDatabase({ useNewUrlParser: true })
      const user = await User.findById(id)
      await disconnectDatabase()
      return user
    } catch (e) {
      return e
    }
  },

  getUserByGoogleId: async (googleId) => {
    try {
      await connectDatabase({ useNewUrlParser: true })
      const user = await User.findOne({ googleId })
      await disconnectDatabase()
      return user
    } catch (e) {
      return e
    }
  },
}

async function connectDatabase(options) {
  await mongoose.connect(process.env.MLAB_CONN, options)
}

async function disconnectDatabase() {
  await mongoose.disconnect()
}

module.exports = usersDal
