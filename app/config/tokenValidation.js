const JWT = require('jsonwebtoken');

tokenValidation = (req, res, next) => {
    try{
        const Authorisation = req.headers.authorization
        if(!Authorisation){
            return res.json({
                status : 400,
                message : 'Missing Authorization Header'
            })
        }

        const data = JWT.verify(Authorisation, process.env.JWT_SECRET)
        if(!data){
            return res.json({
                status : 400,
                message : 'Invalid Token'
            })
        }
        else{
            req.token = data
            next()
        }
    }catch(e){
        console.log(e)
        return res.json({
            status : 500,
            message : 'Internal Server Error'
        })
    }
};

  module.exports = {
    tokenValidation : tokenValidation
  }