const request = require('supertest');
const ingredientsDAL = require('../api/ingredientsDAL')
const ingredientsFixture = require('./fixtures/ingredients.json')
const app = require('../../app')

describe('Ingredients Controller', () => {
    describe('.index', () => {
        const ingredients = JSON.parse(JSON.stringify(ingredientsFixture)).data

        beforeAll(() => {
            jest.spyOn(ingredientsDAL, 'getIngredients').mockResolvedValue(ingredients)
        })

        afterAll(() => {
            jest.restoreAllMocks()
        })

        it('returns a OK status', async () => {
            const { body, status } = await request(app).get('/ingredients')
            expect(status).toEqual(200)
            expect(body).toEqual(ingredients)
        })

    })

    describe('.show', () => {
        const ingredient = JSON.parse(JSON.stringify(ingredientsFixture)).data[0]
        const id = ingredient.ingredientId

        beforeAll(() => {
            jest.spyOn(ingredientsDAL, 'getIngredient').mockResolvedValue(ingredient)
        })

        afterAll(() => {
            jest.restoreAllMocks()
        })

        it('returns a OK status', async () => {
            const { body, status } = await request(app).get(`/ingredients/${id}`)
            expect(status).toEqual(200)
            expect(body).toEqual(ingredient)
        })

    })

})