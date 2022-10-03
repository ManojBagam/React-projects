const express = require('express')
const mongoose = require('mongoose')
const BrandName = require('./model')


const app = express();
mongoose.connect('mongodb+srv://bagammanoj:Manoj%402645%23@cluster0.mptm6qd.mongodb.net/?retryWrites=true&w=majority').then(
  ()=>console.log("Database Connected..!")  
).catch(err=>console.log(err))
app.use(express.json())

app.post('/addbrands',async(req,res)=>{
    const {brandname} = req.body;
    try{
        const newData = new BrandName({brandname});
        await newData.save()
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.messsage)
    }
})

app.get('/getbrands',async(req,res)=>{
    try{
        const allData = await BrandName.find()
        return res.json(allData);

    }
    catch(err){
        console.log(err.messsage)
    }

})

app.get('/getbrands/:id',async(req,res)=>{
    try{
        const Data = await BrandName.findById(req.params.id)
        return res.json(Data)

    }
    catch(err){
        console.log(err.messsage)
    }
})

app.delete('/deletebrand/:id',async(req,res)=>{
    try{
        await BrandName.findByIdAndDelete(req.params.id)
        return res.json(await BrandName.find())

    }
    catch(err){
        console.log(err.messsage)
    }
})

app.listen(3000,()=>console.log("Server running..!"));
