const mongoose  = require("mongoose");

const { Schema, model } = mongoose

const userVehicleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true
    },
    battery1: {
        type: String,
        required: true,
        unique: true
    },
    battery2: {
        type: String,
        required: true,
        unique: true
    }
},
{
    timestamp: true,
    autocreate: true
})

userVehicleSchema.index({
    user: 1,
    vehicle: 1,
    battery1: 1,
    battery2: 1
})

module.exports = model("UserVehicle", userVehicleSchema)