const express = require('express')
const connectDB = require('./config/db.js')
const loadRoutes = require('./routeLoader.js')

const app = express()

connectDB()

app.use(express.json())

// loadRoutes(app)

// // Manejar rutas no encontradas
// app.use((req, res, next) => {
//     res.status(404).send('Ruta no encontrada');
// });
  
//   // Manejar errores
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Error interno del servidor');
// });

const CrearUsuario = require('./routes/create-user.js')
app.use("/api/crear-usuario", CrearUsuario)

const CrearVehiculo = require('./routes/create-vehicle.js')
app.use("/api/crear-vehiculo", CrearVehiculo)

const CrearUsuarioVehiculo = require('./routes/create-uservehicle.js')
app.use("/api/crear-usuario-vehiculo", CrearUsuarioVehiculo)

const EncontrarUsuario = require('./routes/get-user.js')
app.use("/api/encontrar-usuario", EncontrarUsuario)

app.get('/', (req, res) => {
    res.send('HOLA MUNDO')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('CORRIENDO EN EL PUERTO', PORT);
})
