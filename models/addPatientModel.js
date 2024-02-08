const mongoose=require("mongoose")


const addPatientModel=new mongoose.Schema({
  patientName:String,
  mobileNo:String,
  symptoms:String,
  status:String
})

module.exports=mongoose.model("addPatientCollection",addPatientModel)