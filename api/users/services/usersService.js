const usersDAL = require('../api/usersDAL')

const usersService = {
  createUser: async (profile) => {
    const userOptions = {
      googleId: profile.id,
      username: profile.displayName,
      thumbnail: profile._json.image.url
    }
    const response = await usersDAL.createUser(userOptions)
    return response
  },

  getUser: async (id) => {
    const userId = +id
    const response = await usersDAL.getUser(userId)
    return response
  },

  getUserByGoogleId: async (googleId) => {
    const response = await usersDAL.getUserByGoogleId(googleId)
    return response
  }
}

module.exports = usersService
