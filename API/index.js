const { config } = require('dotenv')
config({ path: './.env' })
const express = require('express')
const cors = require('cors')
const perfumesData = require('./data/json/Perfumes.json')
const app = express()
const port = process.env.PORT || 4000
app.use(cors()) //cross origin resource sharing
app.use(express.json())

const data = {
    deliveryData: {},
    itemsList: {},
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-08-01',
})

app.get('/perfumes', (req, res) => {
    res.json(perfumesData)
})

app.get('/config', (req, res) => {
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    })
})

app.post('/submit-delivery-form', (req, res) => {
    data.deliveryData = { ...req.body.deliveryData } // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    data.itemsList = { ...req.body.itemsList } // !
    res.json({ message: 'Data saved in memory!', data })
})

app.get('/get-delivery-data', (req, res) => {
    res.json(data) // Возвращаем сохраненные данные
    data.deliveryData = {}
    data.itemsList = {}
})

app.post('/create-payment-intent', async (req, res) => {
    try {
        const { currency, amount } = req.body
        const paymentIntent = await stripe.paymentIntents.create({
            currency: currency,
            amount: amount,
            automatic_payment_methods: { enabled: true },
        })
        res.send({
            clientSecret: paymentIntent.client_secret,
        })
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        })
    }
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
