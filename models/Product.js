const mongoose = require('mongoose')
const {Schema} = mongoose

const ProductSchema = new Schema({
  sku: {type:String, required:true},
  name: {type:String, required:true},
  price: Number
})

module.exports = mongoose.model('Product', ProductSchema)