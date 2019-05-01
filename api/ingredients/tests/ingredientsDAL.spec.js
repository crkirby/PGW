const mongoose      = require('mongoose')
const Ingredient       = require('../models/ingredient')
const ingredientDAL    = require('../api/ingredientsDAL')
                      require('dotenv').config()

describe('Ingredients Data Access Layer', () => {
    const connOptions = { useNewUrlParser: true }

    describe('.getIngredients', () => {
        describe('success', () => {
            const ingredients = [{ a: 1 }, { b: 2 }]
            let result

            beforeAll(async () => {
                jest.spyOn(mongoose, 'connect').mockResolvedValue({})
                jest.spyOn(Ingredient, 'find').mockResolvedValue(ingredients)
                jest.spyOn(mongoose, 'disconnect').mockResolvedValue({})
                
                result = await ingredientDAL.getIngredients()
            })

            afterAll(() => {
                jest.restoreAllMocks()
            })

            it('opens a database connection', () => {
                expect(mongoose.connect).toHaveBeenCalledWith(process.env.MLAB_CONN, connOptions)
            })

            it('retrieves the ingredients', () => {
                expect(Ingredient.find).toHaveBeenCalled()
            })

            it('closes the database connection', () => {
                expect(mongoose.disconnect).toHaveBeenCalled()
            })

            it('returns the ingredients', () => {
                expect(result).toEqual(ingredients)
            })
        })

        describe('failure', () => {
            describe('when connecting to the database fails', () => {
                const err = new Error()
                let result

                beforeAll(async () => {
                    jest.spyOn(mongoose, 'connect').mockRejectedValue(err)

                    result = await ingredientDAL.getIngredients()
                })

                afterAll(() => {
                    jest.restoreAllMocks()
                })

                it('returns a error', async () => {
                    expect(result).toEqual(err)
                })
            })
        })
    })

    describe('.getIngredient', () => {
        const id = 1
        
        describe('success', () => {
            const ingredient = { projectId: id }
            let result

            beforeAll(async () => {
                jest.spyOn(mongoose, 'connect').mockResolvedValue({})
                jest.spyOn(Ingredient, 'findOne').mockResolvedValue(ingredient)
                jest.spyOn(mongoose, 'disconnect').mockResolvedValue({})
                
                result = await ingredientDAL.getIngredient(id)
            })

            afterAll(() => {
                jest.restoreAllMocks()
            })

            it('opens a database connection', () => {
                expect(mongoose.connect).toHaveBeenCalledWith(process.env.MLAB_CONN, connOptions)
            })

            it('retrieves the ingredient', () => {
                expect(Ingredient.findOne).toHaveBeenCalled()
            })

            it('closes the database connection', () => {
                expect(mongoose.disconnect).toHaveBeenCalled()
            })

            it('returns the ingredient', () => {
                expect(result).toEqual(ingredient)
            })
        })

        describe('failure', () => {
            describe('when connecting to the database fails', () => {
                const err = new Error()
                let result

                beforeAll(async () => {
                    jest.spyOn(mongoose, 'connect').mockRejectedValue(err)
                    
                    result = await ingredientDAL.getIngredient(id)
                })

                afterAll(() => {
                    jest.restoreAllMocks()
                })

                it('returns a error', () => {
                    expect(result).toEqual(err)
                })
            })
        })
    })
})