const express = require('express')
const router = express.Router()
const Accessories = require("../models/accessorymodel");
const { connectToDB } = require('../db')

// connectToDB();

router.get('/', async (req, res)=>{
    try{
        const accessories = await Accessories.find()
        res.json(accessories)
    } catch (error){
        console.log("Error in process", error);
        res.send("Error with code: ", error)
    }
})

router.post('/', async (req, res)=>{
    const accessory = new Accessories({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image,
        averageBuyPrice: req.body.averageBuyPrice,
        amazonLink: req.body.amazonLink
    })

    try{
        const acc1 = await accessory.save();
        res.json(acc1);
        console.log(acc1, "added to the data");
    } catch(error) {
        res.send("Error with code", error)
    }
})

// router.delete('/', async (req, res)=>{
//     try{
//         let result = await Accessories.deleteOne({name: req.body.name})
//         res.json(result)
//     } catch (error){
//         console.log(error);
//     }
// })
router.delete('/:name', async (req, res)=>{
    try{
        let result = await Accessories.deleteOne({name: req.params.name})
        res.json(result)
        console.log(result, "deleted from database");
    } catch (error){
        console.log(error);
    }
})

router.patch('/:name', async(req, res)=> {
    try{
        let accessory = await Accessories.findOne({"name": req.params.name})

        if(req.body.name) accessory.name = req.body.name;
        if(req.body.category) accessory.category = req.body.category;
        if(req.body.description) accessory.description = req.body.description;
        if(req.body.image) accessory.image = req.body.image;
        if(req.body.averageBuyPrice) accessory.averageBuyPrice = req.body.averageBuyPrice;
        if(req.body.amazonLink) accessory.amazonLink = req.body.amazonLink;

        let result = accessory.save()
        res.json(result)
        console.log(result, "updated in database");
    } catch (error){
        console.log("Error with code: ", error);
    }
})

module.exports = router