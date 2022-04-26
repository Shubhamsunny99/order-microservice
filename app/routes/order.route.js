const express          = require("express");
const orderController  = require("../controllers/order.controller");
const Validation       = require('../config/validator');


const orderRoutes = express.Router()

// /orders is prefix from app/index.js 
orderRoutes.post('/add-order', Validation.addOrderValidation, orderController.addOrders)

orderRoutes.get('/fetch-order/:id', orderController.individualOrders)

orderRoutes.put('/update-order/:id', orderController.updateOrders)

orderRoutes.put('/update-order-status/:id', orderController.updateOrderStatus)

orderRoutes.put('/cancel-order/:id', orderController.cancelOrders)


module.exports = orderRoutes

// aZynwk4ecjXuUxBB
