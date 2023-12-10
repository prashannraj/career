const express=require('express')
const router=express.Router()
const Post = require('../model/post')



router.post('/post', async(req, res) => {
    try{
      
     const postExists = await Post.findOne({postName: req.body.postName})
     if(postExists){
          res.status(409).json({msg :'Post already taken!'})
     }else{
              
       //create new post with hash password
      const data=  await Post.create(req.body)
     if(data) res.json({msg :'New Post Created'})
    }
    }catch(err){
     console.log(err)
    }
   })
  
  

  module.exports=router;