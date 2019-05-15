const productsDAL = require('../api/productsDAL')

const productsService = {
    getProduct: async (id) => {
        const product = await productsDAL.getProduct(id)
        return product
    },
    getProducts: async () => {
        const products = await productsDAL.getProducts()
        return products
    },
}

module.exports = productsService
