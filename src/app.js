const express = require('express')
const app = express()
const PORT = 3000

const json = {
  "name": "Mustafa",
  "inc.": "faf",
  "colors": [
    "red", "blue", "green"
  ],
  "nums": [
    1, 2, 3
  ],
  "people": [
    {
      "name": "mom",
      "relationship": "parent"
    },
    {
      "name": "dad",
      "relationship": "parent"
    },
  ]
}

app.get('/', (req, res) => {
  res.send(json)
})

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}!`)
})