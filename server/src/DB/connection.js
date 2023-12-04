const mongoose = require('mongoose')
const connection = async ()=>{
    try{
        const connct = await mongoose.connect(process.env.MONGOOSE);
        if(connct){
            console.log("connected to mongodb")
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = connection