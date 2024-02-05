import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors' // Import cors
dotenv.config()
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import simulationRoutes from './routes/simulationRoutes.js'
import userRoutes from './routes/userRoutes.js'

const port = process.env.PORT || 5000

const app = express()
connectDB()

// Enable CORS
app.use(cors())

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/simulations', simulationRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
