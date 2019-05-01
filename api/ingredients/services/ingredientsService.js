const ingredientsDAL = require('../api/ingredientsDAL')

const ingredientsService = {
    getIngredient: async (_id) => {
        const id = +_id
        const ingredient = await ingredientsDAL.getIngredient(id)
        return ingredient
    },
    getIngredients: async () => {
        const ingredients = await ingredientsDAL.getIngredients()
        return ingredients
    },
}

module.exports = ingredientsService
