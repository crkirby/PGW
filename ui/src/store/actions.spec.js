import types from './types'
import productService from '../services/products'
import actions from './actions'

describe('Store: Actions', () => {
  let dispatch = jest.fn()

  describe('.fetchProducts', () => {
    const products = []

    beforeAll(async () => {
      jest.spyOn(productService, 'fetchProducts').mockResolvedValue(products)
      await actions.fetchProducts()(dispatch)
    })

    it('calls the product service', () => {
      expect(productService.fetchProducts).toHaveBeenCalled()
    })

    it('dispatches the action', () => {
      expect(dispatch).toHaveBeenCalledWith({ type: types.FETCH_PRODUCTS, products })
    })
  })
})