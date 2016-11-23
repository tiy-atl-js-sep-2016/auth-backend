'use strict'

const Product = use('App/Model/Product')

class ProductsController {

  * create (request, response) {
    let user = request.authUser

    if (user.admin) {
      let data = request.only('title', 'price', 'description', 'category', 'image_url')
      let product = yield Product.create(data)
      response.status(201).json(product)
    } else {
      response.status(403).json({ error: "Only admins may add products." })
    }
  }

  * index (request, response) {
    let products = yield Product.all()
    response.status(200).json(products)
  }

}

module.exports = ProductsController
