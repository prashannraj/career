
const router=express.Router()
const University = require('../model/university')
router.use(express.json());



const createUniversity=async(req,res)=>{
    const data= await University.create(req.body)
    if(data){
      res.json({msg: "University created successfully"})
    }
   }

  const getUniversity=async(req,res)=>{
    const data= await University.find()
    if(data){
      res.json({universityList: data})
    }
   }

   const updateUniversity=async(req,res)=>{
    const id = req.body._id;
    const data= await University.findByIdAndUpdate(id,req.body);
    if(data){
      res.json({msg: "University updated successfully"})
    }else{
      res.json({msg:'couldnot update university'});
    }
   }

const deleteUniversity=async(req,res)=>{
    console.log(req.body)
    const data= await University.findByIdAndDelete(req.body.id)
  
    if(data){
      res.json({msg: "university deleted successfully"})
    }
   }
  
const editUniversity=async(req,res)=>{
    const data = await University.findByIdAndUpdate(req.params.id,req.body);
    console.log(data);
    if(data){
      res.json({msg:'successfully updated University',universityList:data})
    }else{
      res.json({msg:'couldnot update University'});
    }
   }

   module.exports={createUniversity,getUniversity,updateUniversity,deleteUniversity,editUniversity}











