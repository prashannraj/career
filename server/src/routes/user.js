const express=require('express')
const router=express.Router()
const {registerNewUser, logInUser} =require('../controller/user')




router.post('/register', registerNewUser),

router.post('/login', logInUser)


module.exports=router;