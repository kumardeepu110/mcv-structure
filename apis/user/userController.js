const usermodel = require('./userModel')

module.exports = {addUser,allUser}

function addUser(req,res){
    let validations = []

    if(!req.body.username)
        validations.push("username")

    if(!req.body.email)
        validations.push("email")
    
    if(!req.body.password)
        validations.push("password")

        if(validations.length>0){
            res.send({
                success:false,
                status:500,
                message:validations.join(',')+" is required"
            })
        }
        else{
            let obj = new usermodel()
            obj.username = req.body.username
            obj.email = req.body.email
            obj.password = req.body.password

            obj.save().then(doc=>{
                res.send({
                    success:true,
                    status:200,
                    message:"User added successfully",
                    username:obj.username,
                    email:obj.email,
                    password:obj.password
                })
            }).catch(err=>{
                res.send({
                    success:false,
                    status:500,
                    message:"error =>"+err
                })
            })
        }
}

function allUser(req,res){
    usermodel.find().then(getUser=>{
        res.send({
            success:true,
            status:200,
            message:"Get all User Successfully",
            Data:getUser
        })
    }).catch(err=>{
        res.send({
            success:false,
            status:500,
            message:"ERROR =>"+err
        })
    })
}