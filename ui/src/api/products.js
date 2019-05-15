import axios from 'axios'

const productsApi = {
  fetchProducts: async () => {
    const response = await axios.get('http://localhost:3001/products')
    return response
  }
}

export default productsApi