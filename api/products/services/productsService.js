const productsDAL = require('../api/productsDAL')

const productsService = {
    getProduct: async (_id) => {
        const id = +_id
        const product = await productsDAL.getProduct(id)
        return product
    },
    getProducts: async () => {
        const products = await productsDAL.getProducts()
        return products
    },
}

module.exports = productsService
