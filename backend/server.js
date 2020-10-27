import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

//Routes
import productRoutes from './routes/productRoutes.js'

dotenv.config()

//CONNECTION TO DATABASE
connectDB()

const app = express()

//MIDDLEWARE
app.use(express.json())

//ROUTES
app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
