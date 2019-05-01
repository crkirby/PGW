const mongoose = require('mongoose')
const Ingredient = require('../models/ingredient')
require('dotenv').config()


const ingredientsDAL = {
    getIngredients: async () => {
        try {
            await connectDatabase({ useNewUrlParser: true })
            const ingredients = await Ingredient.find()
            await disconnectDatabase()
            return ingredients
        } catch (e) {
            return e
        }
    },

    getIngredient: async (id) => {
        try {
            await connectDatabase({ useNewUrlParser: true })
            const ingredient = await Ingredient.findOne({ ingredientId: id })
            await disconnectDatabase()
            return ingredient
        } catch (e) {
            return e
        }
    },
}

async function connectDatabase(options) {
    await mongoose.connect(process.env.MLAB_CONN, options);
}

async function disconnectDatabase() {
    await mongoose.disconnect()
}

module.exports = ingredientsDAL
