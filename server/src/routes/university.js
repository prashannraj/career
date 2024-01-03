const express=require('express')
const router=express.Router()
const {createUniversity, getUniversity, deleteUniversity, editUniversity } =require('../controller/university')

router.use(express.json());




router.post('/universities', createUniversity),

router.get('/universities', getUniversity),

router.put('/universities', editUniversity),

router.delete('/universities', deleteUniversity)


module.exports=router;