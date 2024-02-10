const express = require('express')
const usermodel = require('./apis/user/userModel')
const usercontroller = require('./apis/user/userController')
const adminroutes = require('./Routes/adminRoutes')
require('./config/db')
const app = express()

app.use(express.json())
app.use('/admin',adminroutes)

app.listen(5000, (err)=>{
    if(err){
        console.log('err =>'+err);
    }
    else{
        console.log('server is finally started');
    }
})