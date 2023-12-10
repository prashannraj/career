const express=require('express')
const router=express.Router()
const Quata = require('../model/quata')
router.use(express.json());



router.post('/quatas', async(req, res) => {
    try{
     //check if Quata name doesnt already exist
     const quataExists = await Quata.findOne({quataName: req.body.quataName})
     if(quataExists){
          res.json({msg :'This quata already in the list!'})
     }else{
       //create new quata with name
      const data=  await Quata.create(req.body)
     if(data) res.json({msg :'Quata Name has been created'})
    }
    }catch(err){
     console.log(err)
    }
   })
  

            

            
  module.exports=router;