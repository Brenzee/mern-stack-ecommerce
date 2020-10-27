import dotenv from 'dotenv'
import products from './data/products.js'
import Product from './models/productModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Product.deleteMany()
    await Product.insertMany(products)
    console.log('Products imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

importData()
