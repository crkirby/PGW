import productsApi from './products'
import axios from 'axios'

describe('Products: API', () => {
  describe('.fetchProducts', () => {
    const products = []
    const expectedResponse = { data: products, status: 200 }
    let response

    beforeAll(async () => {
      jest.spyOn(axios, 'get').mockResolvedValue(expectedResponse)
      response = await productsApi.fetchProducts()
    })

    it('returns the correct resources', () => {
      expect(response).toEqual(expectedResponse)
    })
  })
})