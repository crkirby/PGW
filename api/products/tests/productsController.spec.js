const request = require('supertest');
const productsDAL = require('../api/productsDAL')
const productsFixture = require('./fixtures/products.json')
const app = require('../../app')

describe('Products Controller', () => {
    describe('.index', () => {
        const products = JSON.parse(JSON.stringify(productsFixture)).data

        beforeAll(() => {
            jest.spyOn(productsDAL, 'getProducts').mockResolvedValue(products)
        })

        afterAll(() => {
            jest.restoreAllMocks()
        })

        //headers
        it('returns a OK status', async () => {
            const { body, status } = await request(app).get('/products')
            expect(status).toEqual(200)
            expect(body).toEqual(products)
        })

    })

    describe('.show', () => {
        const product = JSON.parse(JSON.stringify(productsFixture)).data[0]
        const id = product.productId

        beforeAll(() => {
            jest.spyOn(productsDAL, 'getProduct').mockResolvedValue(product)
        })

        afterAll(() => {
            jest.restoreAllMocks()
        })

        it('returns a OK status', async () => {
            const { body, status } = await request(app).get(`/products/${id}`)
            expect(status).toEqual(200)
            expect(body).toEqual(product)
        })

    })

})