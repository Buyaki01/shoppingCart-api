const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')

app.use(cors())

mongoose.connect(process.env.MONGO_URL)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})