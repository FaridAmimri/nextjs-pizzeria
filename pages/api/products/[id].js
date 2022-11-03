/** @format */
import dbConnect from '../../../util/mongo'
import Product from '../../../models/Product'

export default async function handler(req, res) {
  const {
    method,
    query: { id }
  } = req

  await dbConnect()

  if (method === 'GET') {
    try {
      const product = await Product.findById(id)
      res.status(200).json(product)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  if (method === 'PUT') {
  }

  if (method === 'DELETE') {
    try {
      await Product.findByIdAndDelete(id)
      res.status(200).json('The product has been deleted !')
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
