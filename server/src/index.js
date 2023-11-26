const express = require('express')
const cors = require('cors')
const connection = require('./DB/connection')
const app = express()
const userRoute = require('./routes/user')
const vacancyRoute = require('./routes/vacancy')


app.use(express.json())
app.use(cors())
app.use(userRoute)
app.use(vacancyRoute)

const port = 4000
connection()


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})