import types from './types'
import productsService from '../services/products'

const fetchAllProducts = () => async dispatch => {
   const products = await productsService.fetchProducts()
   dispatch({ type: types.FETCH_PRODUCTS, products })
}

const mapDispatchToProps = {
  fetchProducts: () => fetchAllProducts()
}

export default mapDispatchToProps
