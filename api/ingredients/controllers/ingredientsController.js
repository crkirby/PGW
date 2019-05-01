const ingredientsService = require('../services/ingredientsService')

exports.index = async (_req, res) => {
    const ingredients = await ingredientsService.getIngredients()
    res.send(ingredients)
}

exports.show = async (req, res) => {
    const ingredient = await ingredientsService.getIngredient(req.params.id)
    res.send(ingredient)
}
