const productsService = require('../services/productsService')

exports.index = async (_req, res) => {
    const products = await productsService.getProducts()
    res.send(products)
}

exports.show = async (req, res) => {
    const product = await productsService.getProduct(req.params.id)
    res.send(product)
}
