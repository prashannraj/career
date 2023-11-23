const express=require('express')
const router=express.Router()
const Vacancy = require('../model/vacancy')
router.use(express.json());



router.post('/vacancies', async(req, res) => {
    try{
     //check if job's post name doesnt already exist
     const jobsExists = await Vacancy.findOne({postName: req.body.postName})
     if(jobsExists){
          res.json({msg :'This post has been already in the list!'})
     }else{
       //create new vacancy with post name
      const data=  await Vacancy.create(req.body)
     if(data) res.json({msg :'Post has been created'})
    }
    }catch(err){
     console.log(err)
    }
   })
  

   router.get('/vacancies',async(req,res)=>{
    const data= await Product.find()
    if(data){
      res.json({productList: data})
    }
   })

  module.exports=router;