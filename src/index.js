'use strict'

const express = require('express')

const api = express()
api.listen(3000, () => {
  console.log('Api up and running')
})

api.get('/', (req, res) => {
  console.log(req)
  res.send('Hello, world!')
})

api.post('/something', (req, res) => {
  console.log(req)
  res.send('This was a post kajigger')
})