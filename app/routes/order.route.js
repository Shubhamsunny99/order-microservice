const express          = require("express");
const orderController  = require("../controllers/order.controller");
const Validation       = require('../config/validator');


const orderRoutes = express.Router()

// /orders is prefix from app/index.js 
orderRoutes.post('/add-order', Validation.addOrderValidation, orderController.addOrders)

module.exports = orderRoutes

// aZynwk4ecjXuUxBB
