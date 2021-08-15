const express= require('express')

const router = new express.Router()

const MensRanking = require('../models/men')
router.get('/',async(req,res)=>{
    res.send('WELCOME TO PROJECT OF WORLD RANKING IN JAVELIN THROW')
})


//post
router.post('/mens',async(req,res)=>{
    try{
        const addingMensRecords= new MensRanking(req.body)
        console.log(req.body)
        const insertf= await addingMensRecords.save()
        res.status(201).send(insertf)
    }catch(e){
        res.status(400).send(e)
    }
})

//to fetch all the data
router.get('/mens',async(req,res)=>{
    try{
        const getMens= await MensRanking.find({}).sort({"Place":1})
        
        res.send(getMens)
    }catch(e){
        res.status(400).send(e)
    }
})

//to fetch data of individual
router.get('/mens/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const getMen= await MensRanking.findById({_id:id})
        
        res.send(getMen)
    }catch(e){
        res.status(400).send(e)
    }
})
//to edit or update
router.patch('/mens/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const getMen= await MensRanking.findByIdAndUpdate({_id:id},req.body,{
            new:true
        })
        
        res.send(getMen)
    }catch(e){
        res.status(500).send(e)
    }
})
//delete req
router.delete('/mens/:id',async(req,res)=>{
    try{
        req.params.id
        const getMen= await MensRanking.findByIdAndDelete(req.params.id)
        
        res.send(getMen)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports= router
