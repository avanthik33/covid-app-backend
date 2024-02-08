const express=require("express")
const addPatientModel=require("../models/addPatientModel")
const router=express()

router.post("/add",async(req,res)=>{
  let data=req.body
  let addPatientObj=new addPatientModel(data)
  await addPatientObj.save()
  res.json({status:"success"})
})

router.get("/view",async(req,res)=>{
  let data=await addPatientModel.find()
  res.json(data)
})

module.exports=router