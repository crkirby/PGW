const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: { type: String, trim: true, minlength: 2, maxLength: 160 },
  price: { type: Number, min: 0 },
});

const Ingredient = mongoose.model('Ingredient', schema)

module.exports = Ingredient
