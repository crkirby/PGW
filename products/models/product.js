const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: { type: String, trim: true, minlength: 2, maxLength: 160 },
  description: { type: String, maxlength: 400 },
  price: { type: Number, min: 0 },
  tags: [String],
  date: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', schema)

module.exports = Product
