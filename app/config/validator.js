const { Validator } = require('node-input-validator');

addOrderValidation = (req, res, next) => {
    const validate = new Validator(req.body, {
        "restuarantID"  : "required|string",
        "userID"        : "required|string",
        "menus"         : "required|array",
        "menus.*.menuID": "required|string",
        "menus.*.price" : "required|integer"
    });
  
    validate.check().then((matched) => {
      if (!matched) {
        let key = Object.keys(validate.errors)[0]
        return res.json({
            status : 400,
            error : validate.errors[key].message
        })
      } else {
        next()
      }
    }).catch((err) => {
        return res.json({
            status : 400,
            error : err
        })
    })
};

  module.exports = {
    addOrderValidation : addOrderValidation
  }