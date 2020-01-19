'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const api = express()
api.use(express.static(__dirname + '/public'))
api.use('/memes', express.static(__dirname + '/files'))
api.use(bodyParser.json())

api.listen(3000, () => {
  console.log('Api up and running')
})

api.post('/add', (req, res) => {
  console.log(req.body)
  res.send('This was a post kajigger')
})

