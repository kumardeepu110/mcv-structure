const router = require('express').Router()
const usercontroller = require('../apis/user/userController')

router.post('/user/add', usercontroller.addUser)
router.post('/user/all', usercontroller.allUser)

module.exports = router
