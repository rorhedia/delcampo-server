

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

/** TESTING */
app.get('/', (request, response) => {
  response.json({
    success: true
  })
})

module.exports = app