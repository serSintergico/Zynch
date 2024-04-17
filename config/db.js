const mongoose  = require("mongoose");

//Establecimiento de conexion con BD
async function connectDB() {
  try{
    await mongoose.connect('mongodb+srv://LeonardoParra:5545746467Lp@cluster0.qmrip7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('CONEXION EXITOSA')
  }catch(error){
    console.log('CONEXION FALLIDA', error);
  }
}

module.exports = connectDB