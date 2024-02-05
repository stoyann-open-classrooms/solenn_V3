import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'

import simulations from './data/simulations.js'

const port = process.env.PORT || 5000

const app = express()
connectDB()
app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/simulations', (req, res) => {
  res.json(simulations)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
