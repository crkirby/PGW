const mongoose      = require('mongoose')
const Product       = require('../models/product')
const productDAL    = require('../api/productsDAL')
                      require('dotenv').config()

describe('Products Data Access Layer', () => {
    const connOptions = { useNewUrlParser: true }

    describe('.getProducts', () => {
        describe('success', () => {
            const products = [{ a: 1 }, { b: 2 }]
            let result

            beforeAll(async () => {
                jest.spyOn(mongoose, 'connect').mockResolvedValue({})
                jest.spyOn(Product, 'find').mockResolvedValue(products)
                jest.spyOn(mongoose, 'disconnect').mockResolvedValue({})
                
                result = await productDAL.getProducts()
            })

            afterAll(() => {
                jest.restoreAllMocks()
            })

            it('opens a database connection', () => {
                expect(mongoose.connect).toHaveBeenCalledWith(process.env.MLAB_CONN, connOptions)
            })

            it('retrieves the products', () => {
                expect(Product.find).toHaveBeenCalled()
            })

            it('closes the database connection', () => {
                expect(mongoose.disconnect).toHaveBeenCalled()
            })

            it('returns the products', () => {
                expect(result).toEqual(products)
            })
        })

        describe('failure', () => {
            describe('when connecting to the database fails', () => {
                const err = new Error()
                let result

                beforeAll(async () => {
                    jest.spyOn(mongoose, 'connect').mockRejectedValue(err)

                    result = await productDAL.getProducts()
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

    describe('.getProduct', () => {
        const id = 1
        
        describe('success', () => {
            const product = { projectId: id }
            let result

            beforeAll(async () => {
                jest.spyOn(mongoose, 'connect').mockResolvedValue({})
                jest.spyOn(Product, 'findOne').mockResolvedValue(product)
                jest.spyOn(mongoose, 'disconnect').mockResolvedValue({})
                
                result = await productDAL.getProduct(id)
            })

            afterAll(() => {
                jest.restoreAllMocks()
            })

            it('opens a database connection', () => {
                expect(mongoose.connect).toHaveBeenCalledWith(process.env.MLAB_CONN, connOptions)
            })

            it('retrieves the product', () => {
                expect(Product.findOne).toHaveBeenCalled()
            })

            it('closes the database connection', () => {
                expect(mongoose.disconnect).toHaveBeenCalled()
            })

            it('returns the product', () => {
                expect(result).toEqual(product)
            })
        })

        describe('failure', () => {
            describe('when connecting to the database fails', () => {
                const err = new Error()
                let result

                beforeAll(async () => {
                    jest.spyOn(mongoose, 'connect').mockRejectedValue(err)
                    
                    result = await productDAL.getProduct(id)
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