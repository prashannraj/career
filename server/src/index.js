const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connection = require('./DB/connection')
const app = express()
const userRoute = require('./routes/user')
const vacancyRoute = require('./routes/vacancy')
const universityRoute = require('./routes/university')
const levelRoute = require('./routes/level')
const postRoute = require('./routes/post')
const qualificationRoute = require('./routes/qualification')
const serviceRoute = require('./routes/service')
const quataRoute = require('./routes/quata')
console.log(process.env.SECRETE_KEY)


app.use(express.json())
app.use(cors())
app.use(userRoute)
app.use(vacancyRoute)
app.use(universityRoute)
app.use(levelRoute)
app.use(postRoute)
app.use(qualificationRoute)
app.use(quataRoute)
app.use(serviceRoute)

const port = process.env.PORT



connection()





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})