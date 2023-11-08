const express = require('express')
const app = express()
const port = 4000

app.get('/admin', (req, res) => {
  res.send('This is backend!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})