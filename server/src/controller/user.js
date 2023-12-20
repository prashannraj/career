
const User = require('../model/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const registerNewUser= async(req, res) => {
try{
    //check if user/email/phoneNumber doesnt already exist
    const userExists = await User.findOne({email: req.body.email})
    if(userExists){
         res.status(409).json({msg :'This email already taken!'})
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
  }
 

  const logInUser =async (req,res)=>{
     //check if phoneNumber exists
     const userDetails = await User.findOne({email: req.body.email})
     if(!userDetails){
       res.status(401).json({msg :'User Not Found'})
     }else{
       const isMatched = await bcrypt.compare( req.body.password,userDetails.password )
       if(isMatched){
         const token = jwt.sign({email: req.body.email}, process.env.SECRETE_KEY);
         res.json({msg :'Login Successfull', token, userDetails})
       }else{
         res.status(401).json({msg :'Incorrect password'})
       }
     }
   
   }

   const getAllUsers = async (req,res)=>{
    const list = await  User.find()
    res.json({list})
  }


  const updateUserDetails = async(req,res)=>{
    const data = await User.findByIdAndUpdate(req.params.id,req.body);
    console.log(data);
    if(data){
      res.json({msg:'successfully updated profile details',userDetails:data})
    }else{
      res.json({msg:'couldnot update profile details'});
    }
   }

   const changePassword = async (req,res)=>{
    //1. check if phoneNumber exists
   
    const userDetail = await User.findById(req.query.userId).select('+password')
    
    const isMatched = await bcrypt.compare(req.body.oldPassword, userDetail.password)
    if(isMatched){
      const hashPassword = await bcrypt.hash(req.body.newPassword, saltRounds)
      await User.findByIdAndUpdate(req.query.userId, {password: hashPassword})
       
        res.json({msg :'Password Changed'})
      }else{
        res.status(401).json({msg :'Incorrect password'})
      }
    }

    const editUser= async(req,res)=>{
      const id = req.body._id;
      const data= await User.findByIdAndUpdate(id,req.body);
      if(data){
        res.json({msg: "User updated successfully"})
      }else{
        res.json({msg:'couldnot update User'});
      }
     }

     const deleteUser = async(req,res)=>{
      const data= await User.findByIdAndDelete(req.body.id)
    
      if(data){
        res.json({msg: "User deleted successfully"})
      }
      else{
         res.json({msg:'couldnot delete User'});
       }
     }

  module.exports = {registerNewUser, logInUser, getAllUsers, updateUserDetails, changePassword, editUser, deleteUser}