const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connection = require('./DB/connection')
const app = express()
const userRoute = require('./routes/user')
const vacancyRoute = require('./routes/vacancy')
console.log(process.env.SECRETE_KEY)


app.use(express.json())
app.use(cors())
app.use(userRoute)
app.use(vacancyRoute)

const port = process.env.PORT



connection()





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})