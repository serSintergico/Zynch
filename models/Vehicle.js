const mongoose  = require("mongoose");

const { Schema, model } = mongoose

const vehicleSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    engineSerialNumber: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true
    }
},
{
    timestamp: true,
    autocreate: true
})

vehicleSchema.index({
    engineSerialNumber: 1
})

module.exports = model("Vehicle", vehicleSchema)