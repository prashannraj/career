const express=require('express')
const router=express.Router()
const University = require('../model/university')
router.use(express.json());



router.post('/universities', async(req, res) => {
    try{
     //check if university name doesnt already exist
     const universityExists = await University.findOne({universityName: req.body.universityName})
     if(universityExists){
          res.json({msg :'This post University already in the list!'})
     }else{
       //create new University with name
      const data=  await University.create(req.body)
     if(data) res.json({msg :'University Name has been created'})
    }
    }catch(err){
     console.log(err)
    }
   })
  

   router.get('/universities',async(req,res)=>{
    const data= await University.find()
    if(data){
      res.json({universityList: data})
    }
   })


   router.get('/universities/:id',async(req,res)=>{
    const data= await University.findById(req.params.id)
    if(data){
      res.json({universityList: data})
    }
   })

  module.exports=router;