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

router.post("/search",async(req,res)=>{
  let data=req.body
  let searchModel=await addPatientModel.find(data)
  res.json(searchModel)
})

module.exports=router