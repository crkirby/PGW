const express = require('express')
const router = express.Router()
const ingredientsController = require('../controllers/ingredientsController')

router.get('/', ingredientsController.index)
router.get('/:id', ingredientsController.show)

module.exports = router
