const orderService = require("../services/order.service")


module.exports = {
    addOrders : async (req, res) => {
        try{
            await orderService.addOrder(req.body)
                .then(order_D => {
                    return res.json({
                        status : 200,
                        data  : order_D
                    })
                }).catch(err => {
                    return res.json({
                        status : 400,
                        error  : err
                    })
                })
        }catch(e){
            return res.json({
                status : 400,
                error  : e
            })
        }
    },

    individualOrders : async (req, res) => {
        try{
            await orderService.individualOrder(req.params)
                .then(order_D => {
                    return res.json({
                        status : 200,
                        data  : order_D
                    })
                }).catch(err => {
                    return res.json({
                        status : 400,
                        error  : err
                    })
                })
        }catch(e){
            return res.json({
                status : 400,
                error  : e
            })
        }
    },

    updateOrders : async (req, res) => {
        try{
            await orderService.updateOrder(req.params, req.body)
                .then(order_D => {
                    return res.json({
                        status : 200,
                        data  : "Order Updated Succesfully"
                    })
                }).catch(err => {
                    return res.json({
                        status : 400,
                        error  : err
                    })
                })
        }catch(e){
            return res.json({
                status : 400,
                error  : e
            })
        }
    },

    updateOrderStatus : async (req, res) => {
        try{
            await orderService.updateOrderStatus(req.params)
                .then(order_D => {
                    return res.json({
                        status : 200,
                        data  : "Order Delivered"
                    })
                }).catch(err => {
                    return res.json({
                        status : 400,
                        error  : err
                    })
                })
        }catch(e){
            return res.json({
                status : 400,
                error  : e
            })
        }
    },

    cancelOrders : async (req, res) => {
        try{
            await orderService.cancelOrder(req.params)
                .then(order_D => {
                    return res.json({
                        status : 200,
                        data  : "Order Delivered"
                    })
                }).catch(err => {
                    return res.json({
                        status : 400,
                        error  : err
                    })
                })
        }catch(e){
            return res.json({
                status : 400,
                error  : e
            })
        }
    },
}

// aZynwk4ecjXuUxBB
