const express=require("express")
const addPatientModel=require("../models/addPatientModel")
const router=express()

router.post("/add",async(req,res)=>{
  let data=req.body
  let addPatientObj=new addPatientModel(data)
  await addPatientObj.save()
  res.json({status:"success"})
})

module.exports=router