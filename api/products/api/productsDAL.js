const mongoose = require('mongoose')
const Product = require('../models/product')
require('dotenv').config()


const productsDAL = {
    getProducts: async () => {
        try {
            await connectDatabase({ useNewUrlParser: true })
            const products = await Product.find()
            await disconnectDatabase()
            return products
        } catch (e) {
            return e
        }
    },

    getProduct: async (id) => {
        try {
            await connectDatabase({ useNewUrlParser: true })
            const product = await Product.findById(id)
            await disconnectDatabase()
            return product
        } catch (e) {
            return e
        }
    },
}

async function connectDatabase(options) {
    await mongoose.connect(process.env.MLAB_CONN, options);
}

async function disconnectDatabase() {
    await mongoose.disconnect()
}

module.exports = productsDAL
