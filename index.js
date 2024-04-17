const express = require('express')
const connectDB = require('./config/db.js')

const app = express()

//Establecimiento de conexion con BD
connectDB()

app.use(express.json())

//Rutas utilizadas para la creacion de documentos via Postman

const CrearUsuario = require('./routes/create-user.js')
app.use("/api/crear-usuario", CrearUsuario)

const CrearVehiculo = require('./routes/create-vehicle.js')
app.use("/api/crear-vehiculo", CrearVehiculo)

const CrearUsuarioVehiculo = require('./routes/create-uservehicle.js')
app.use("/api/crear-usuario-vehiculo", CrearUsuarioVehiculo)

//Rutas utilizadas para consultar documentos via Android App

const EncontrarUsuario = require('./routes/get-user.js')
app.use("/api/encontrar-usuario", EncontrarUsuario)

//Inicializacion del servidor 

app.get('/', (req, res) => {
    res.send('CONEXION')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('CORRIENDO EN EL PUERTO', PORT);
})
