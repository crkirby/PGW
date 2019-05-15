import productService from './products'
import productApi from '../api/products'

describe('Products: Service', () => {
  describe('.fetchProducts', () => {
    const products = { data: [] }
    let result

    beforeAll(async () => {
      jest.spyOn(productApi, 'fetchProducts').mockResolvedValue(products)
      result = await productService.fetchProducts()
    })

    it('calls the product api', () => {
      expect(productApi.fetchProducts).toHaveBeenCalled()
    })

    it('returns the data', () => {
      expect(result).toEqual(products.data)
    })
  })
})