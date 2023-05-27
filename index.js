const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const Product = require('./models/Product')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)

app.post('/products', async (req, res) => {
  const { sku, name, price } = req.body
  const productDoc = await Product.create({
    sku,
    name,
    price
  })
  res.json(productDoc)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})