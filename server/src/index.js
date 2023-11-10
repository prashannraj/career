const express = require('express')
const connection = require('./DB/connection')
const app = express()
const port = 4000
const User=require('./model/user')


connection()

app.post('/register', async(req, res) => {
  await User.create(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})