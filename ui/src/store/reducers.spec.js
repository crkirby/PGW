import reducer from './reducers'
import types from './types'

describe('Store: Reducers', () => {
  describe(`when type is "${types.FETCH_PRODUCTS}"`, () => {
    const products = ['a']
    const state = {}
    const action = { products, type: types.FETCH_PRODUCTS } 

    let result 
    beforeAll(() => {
      result = reducer(state, action)
    })

    it('updates the products state', () => {
      expect(result).toEqual({ products })
    })

  })

  describe.skip('when type is "SET_CURRENT_PRODUCT"', () => {
    
  })
  
  describe.skip('when type is "FETCH_CURRENT_PRODUCT"', () => {

  })

})
