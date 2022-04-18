const mongoose = require('mongoose'),
      {Schema} = mongoose;

let table = new Schema(
  {
      restuarantID: {
        type: Schema.Types.ObjectId,
        default: null,
        lowercase: true
      },
      userID: {
        type: Schema.Types.ObjectId,
        default: null,
        lowercase: true
      },
      menus: {
        type: Array,
        default: []
      },
      orderStatus: {
        type: String,
        enum : [''],
        default : null
      }
  },
  {
      timestamps: {
          createdAt: 'createdAt',
          updatedAt: 'updatedAt'
      },
  }
);

// module.exports = table
module.exports = mongoose.model(`orders`, table);