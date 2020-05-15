const mongoose = require('mongoose')

const schema =  mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  
})

const User = mongoose.model('uploadOne', schema)

module.exports = User



