const express = require('express')
const router = express.Router()
const Accessories = require("../models/accessorymodel");
const { connectToDB } = require('../db')
const {ValidateProduct} = require('../validators/productValidator')
const validateToken = require('../validators/validateJwtToken')

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

router.use(validateToken);
router.get('/:id', async (req, res)=>{
    try{
        const id = req.params.id
        const accessories = await Accessories.findOne({_id: id})
        res.json(accessories)
    } catch (error){
        console.log("Error in process", error);
        res.send("Error with code: ", error)
    }
})

router.post('/', async (req, res)=>{

    const validationResult = ValidateProduct(req.body);
    const {error} = validationResult

    if(error) {
        console.log(error);
        return res.send(error.details);
    }

    const accessory = new Accessories({
        user_id: req.user._id,
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
router.delete('/:id', async (req, res)=>{
    try{
        let result = await Accessories.deleteOne({_id: req.params.id})
        res.json(result)
        console.log(result, "deleted from database");
    } catch (error){
        console.log(error);
    }
})

router.patch('/:id', async(req, res)=> {

    const validationResult = ValidateProduct(req.body);
    const {error} = validationResult

    if(error) {
        console.log(error);
        return res.send(error.details);
    }
    
    try{
        let accessory = await Accessories.findOne({_id: req.params.id})

        if(req.user._id)accessory.user_id = req.user._id;
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