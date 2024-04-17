const express = require("express");
const router = express.Router();

const { Vehicle } = require('../models')

router.post('/', async (req, res) => {

    const payload = req.body

    const vehicle = new Vehicle(payload)

    try{
        await vehicle.save()
    }catch(error){
        console.log(error)
    }

    return res.status(200).send('Todo bien')
})

module.exports = router