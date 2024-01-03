const express=require('express')
const router=express.Router()
const {registerNewUser, logInUser, getAllUsers, updateUserDetails, changePassword, editUser, deleteUser } =require('../controller/user')
router.use(express.json());




router.post('/register', registerNewUser),

router.post('/login', logInUser),

router.get('/users', getAllUsers),

router.post('/profile/edit/:id', updateUserDetails),

router.post('/change-password', changePassword),

router.put('/users', editUser),

router.delete('/users', deleteUser)


module.exports=router;