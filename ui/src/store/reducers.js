import types from './types'

const initialState = {
  products: [],
  currentProduct: {}
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      const { products } = action
      return { ...state, products }

    default:
      return state
  }
}