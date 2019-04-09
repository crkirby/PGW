const express 		= require('express')
const productRoutes	= require('./products/routes')
const app 			= express()

app.use(express.urlencoded({ extended: true }))
app.use('/products', productRoutes)

module.exports = app