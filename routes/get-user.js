const express = require("express");
const router = express.Router();

const { User, UserVehicle } = require('../models')

router.get('/', async (req, res) => {

  const { fullName, phone, email } = req.query

  const user = await User.findOne({
    $or: [
      { fullName: fullName },
      { phone: phone },
      { email: email }
    ]
  })


  if(!user) res.status(500).send('No se encontro al usuario')
  else{
    const relatedVehicles = await UserVehicle.find({ user: user.id }).populate([
      {
        path: 'vehicle'
      }
    ])
    
    const response = user.formatUser(relatedVehicles)
    return res.status(200).send(response)
  }
  
  

})

module.exports = router