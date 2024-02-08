const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const addPatientRouter=require("./connerctors/addPatientRouter")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://avanthik:avanthik@cluster0.yuxak7x.mongodb.net/PatientDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/patient",addPatientRouter)

app.listen(3000,()=>{
  console.log("server is running")
})