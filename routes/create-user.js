const express = require("express");
const router = express.Router();

const { User } = require('../models')

router.post('/', async (req, res) => {

    const payload = req.body

    const user = new User(payload)

    try{
        await user.save()
    }catch(error){
        console.log(error)
    }
    
    

    return res.status(200).send('Todo bien')
})

module.exports = router