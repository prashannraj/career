const express = require('express')
const connection = require('./DB/connection')
const app = express()
const port = 4000
const User=require('./model/user')


connection()

// app.get('/admin', (req, res) => {
//   res.send('This is backend!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})