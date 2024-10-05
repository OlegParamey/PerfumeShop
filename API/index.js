const express = require('express')
const cors = require('cors')
const perfumesData = require('./data/json/Perfumes.json')

const app = express()

app.use(cors()) //cross origin resource sharing

app.get('/perfumes', (req, res) => {
    res.json(perfumesData)
})

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
