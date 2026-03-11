const express = require('express')
const mongoose = require('mongoose');
const Customer = require('./models/customers.js')

const app = express()
mongoose.set('strictQuery', false);

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

process.env.NODE_ENV !== 'production' && require('dotenv').config();

const PORT = process.env.PORT || 3000
const CONNECTION = process.env.CONNECTION

const customers = [
  {
    "name": "Mustafa",
    "inc": "facebook"
  },
  {
    "name": "Manga",
    "inc": "instagram"
  },
  {
    "name": "Tahsin",
    "inc": "youtube"
  },
] 

const customer = new Customer({
  name: 'Hannash',
  inc: 'tiktok'
})

customer.save();

app.get('/', (req, res) => {
  res.send('Welcome to the Homepage!')
})

app.get('/api/customers', (req, res) => {
  res.send({"customers": customers, customer})
})

app.post('/api/customers', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

const start = async() => {
  try {
    await mongoose.connect(CONNECTION)

    app.listen(PORT, () => {
      console.log(`App is listening on ${PORT}!`)
    })
  } catch(err) {
    console.log(err.message)
  }
}

start()