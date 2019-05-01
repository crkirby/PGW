const express = require('express')
const ingredientRoutes = require('./ingredients/routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/ingredients', ingredientRoutes)

module.exports = app
