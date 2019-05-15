import productsApi from '../api/products'

const productService = {
  fetchProducts: async () => {
    const { data: products } = await productsApi.fetchProducts()
    return products
  }
}

export default productService