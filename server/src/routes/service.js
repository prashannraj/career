const express=require('express')
const router=express.Router()
const Service = require('../model/service')
router.use(express.json());



router.post('/services', async(req, res) => {
    try{
     //check if service name doesnt already exist
     const serviceExists = await Service.findOne({serviceName: req.body.serviceName})
     if(serviceExists){
          res.json({msg :'This service already in the list!'})
     }else{
       //create new service with name
      const data=  await Service.create(req.body)
     if(data) res.json({msg :'Service Name has been created'})
    }
    }catch(err){
     console.log(err)
    }
   })
  

            

            
  module.exports=router;