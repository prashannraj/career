const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken');
const User = require('../model/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/register', async(req, res) => {
    try{
     //check if user/email/phoneNumber doesnt already exist
     const userExists = await User.findOne({phoneNumber: req.body.phoneNumber})
     if(userExists){
          res.status(409).json({msg :'Phone Number already taken!'})
     }else{
       //generate a hash Password
       const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
       req.body.password = hashPassword
       //create new user with hash password
      const data=  await User.create(req.body)
     if(data) res.json({msg :'User registered. Please login'})
    }
    }catch(err){
     console.log(err)
    }
   })
  
  
   router.post('/login',async (req,res)=>{
   //check if phoneNumber exists
    const userDetails = await User.findOne({email: req.body.email})
    if(!userDetails){
      res.status(401).json({msg :'User Not Found'})
    }else{
      const isMatched = await bcrypt.compare( req.body.password,userDetails.password )
      if(isMatched){
        const token = jwt.sign({email: req.body.email}, process.env.SECRETE_KEY);
        res.json({msg :'Login Successfull', token})
      }else{
        res.status(401).json({msg :'Incorrect password'})
      }
    }
  
  })

  module.exports=router;