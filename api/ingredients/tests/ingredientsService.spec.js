const ingredientsService = require('../services/ingredientsService')
const ingredientsDAL = require('../api/ingredientsDAL')

describe('Ingredients Service', () => {
    describe('.getIngredients', () => {
        const ingredients = [{}]
        let result

        beforeAll(async () => {
            jest.spyOn(ingredientsDAL, 'getIngredients').mockReturnValue(ingredients)

            result = await ingredientsService.getIngredients()
        })

        afterAll(() => {
            jest.restoreAllMocks()
        })

        it('calls the ingredientDAL', () => {
            expect(ingredientsDAL.getIngredients).toHaveBeenCalled()
        })

        it('returns the ingredients', () => {
            expect(result).toEqual(ingredients)
        })

    })

    describe('.getIngredient', () => {
        const id = 1
        const ingredient = {}
        let result

        beforeAll(async () => {
            jest.spyOn(ingredientsDAL, 'getIngredient').mockReturnValue(ingredient)

            result = await ingredientsService.getIngredient(id)
        })

        afterAll(() => {
            jest.restoreAllMocks()
        })

        it('calls the ingredientDAL', () => {
            expect(ingredientsDAL.getIngredient).toHaveBeenCalled()
        })

        it('returns the ingredient', () => {
            expect(result).toEqual(ingredient)
        })

    })
})