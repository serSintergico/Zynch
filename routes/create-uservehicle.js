const express = require("express");
const router = express.Router();

const { UserVehicle } = require('../models')

router.post('/', async (req, res) => {

  const payload = req.body

  const userVehicle = new UserVehicle(payload)

  try{
      await userVehicle.save()
  }catch(error){
    console.log(error)
    return res.status(500).send('Todo mal')
  }

  return res.status(200).send('Todo bien')
})

module.exports = router