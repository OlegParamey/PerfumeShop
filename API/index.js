const express = require('express')
const cors = require('cors')
const perfumeData = require('./data/json/Perfumes.json')

const app = express()

app.use(cors())

app.get('/www', (req, res) => {
    res.json(perfumeData)
})

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
