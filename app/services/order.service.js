// Business logic
// Database etc 

const Order = require("../models/order")

module.exports = {
    addOrder: async (body) => {
        return new Promise(async(resolve, reject) => {
            const orderData = {
                restuarantID : body.restuarantID,
                userID       : body.userID,
                menus        : body.menus,
                orderStatus  : 'In-Progress'
            }

            await Order.create(orderData)
                .then(data => {
                    return resolve(data)
                })
                .catch(err => {
                    return reject(err)
                })
        })
    },

    updateOrder: async (params, body) => {
        return new Promise(async(resolve, reject) => {
            const _id = params.id;
            const orderData = {
                restuarantID : body.restuarantID,
                userID       : body.userID,
                menus        : body.menus
            }
            await Order.findOne({_id : _id})
                .then(order_D => {
                    if(!order_D){
                        return reject("Order Not Found")
                    }
                    return Order.updateOne({_id : _id}, {$set : orderData})
                })
                .then(data => {
                    return resolve(data)
                })
                .catch(err => {
                    return reject(err)
                })
        })
    },

    individualOrder: async (params) => {
        return new Promise(async(resolve, reject) => {
            await Order.findOne({_id : params.id})
                .then(data => {
                    return resolve(data)
                })
                .catch(err => {
                    return reject(err)
                })
        })
    },

    updateOrderStatus : async (params) => {
        return new Promise(async(resolve, reject) => {
            await Order.updateOne({_id : params.id} , {$set : {orderStatus : "Completed"}})
                .then(data => {
                    return resolve(data)
                })
                .catch(err => {
                    return reject(err)
                })
        })
    },

    cancelOrder : async (params) => {
        return new Promise(async(resolve, reject) => {
            await Order.updateOne({_id : params.id} , {$set : {orderStatus : "Cancel"}})
                .then(data => {
                    return resolve(data)
                })
                .catch(err => {
                    return reject(err)
                })
        })
    }


}