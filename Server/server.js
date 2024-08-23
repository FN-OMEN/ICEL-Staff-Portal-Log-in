const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const knex = require('knex')

const app = express()

let initialPath = path.join(__dirname, "")

app.use(bodyParser.json())
app.use(express.static(initialPath))

app.get('/login', (req, res) => {
  res.sendFile(path.join(initialPath, 'index.html'))
})

app.get('/signup', (req, res) => {
  res.sendFile(path.join(initialPath, 'sign-up.html'))
})

app.listen(5000, (req, res) => {
  console.log('Server is running on port 5000.....')
})