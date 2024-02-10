const mongoose = require('mongoose')

const usermodel = mongoose.Schema({
    username:{type:String, default:''},
    email:{type:String, default:''},
    password:{type:String, default:''},
    createdAt:{type:Date, default:Date.now}
})

module.exports = mongoose.model('user',usermodel)