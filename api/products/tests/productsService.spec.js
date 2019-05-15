const productsService = require('../services/productsService')
const productsDAL = require('../api/productsDAL')

describe('Products Service', () => {
    describe('.getProducts', () => {
        const products = [{}]
        let result

        beforeAll(async () => {
            jest.spyOn(productsDAL, 'getProducts').mockReturnValue(products)

            result = await productsService.getProducts()
        })

        afterAll(() => {
            jest.restoreAllMocks()
        })

        it('calls the productDAL', () => {
            expect(productsDAL.getProducts).toHaveBeenCalled()
        })

        it('returns the products', () => {
            expect(result).toEqual(products)
        })

    })

    describe('.getProduct', () => {
        const id = 1
        const product = {}
        let result

        beforeAll(async () => {
            jest.spyOn(productsDAL, 'getProduct').mockReturnValue(product)

            result = await productsService.getProduct(id)
        })

        afterAll(() => {
            jest.restoreAllMocks()
        })

        it('calls the productDAL', () => {
            expect(productsDAL.getProduct).toHaveBeenCalledWith(id)
        })

        it('returns the product', () => {
            expect(result).toEqual(product)
        })

    })
})