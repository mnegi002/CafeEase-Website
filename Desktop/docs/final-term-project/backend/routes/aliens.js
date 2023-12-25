const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/' , async(req,res)=>{
    try{
        const aliens = await Alien.find()
        res.json(aliens)

    }catch(err){
        res.send('err' + err)
    }
})

router.post('/', async(req,res)=>{
    console.log(req.body);
    const alien = new Alien({
        name:req.body.name,
        email:req.body.email
    })
    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('err' + err)
    }
})  

module.exports = router