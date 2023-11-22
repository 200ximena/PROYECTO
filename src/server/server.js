const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const mongoose = require('mongoose');


const app = express();
const puerto = process.env.EXPRESS_PORT || 8888;

app.use(cors());


const mongoURL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Proyecto';
mongoose.connect(mongoURL,{
})

.then(() => console.log('Conectado a la db'.bgCyan.black))
.catch(error => console.error('Error al conectar con la base de datos:', error.message));

app.use(express.json());

    const registarUsuariosRouter = require('./rutas/rutaUsuarios');
    app.use('/api/v1/devcamps/users', registarUsuariosRouter)

    const registarCitasRouter = require('./rutas/rutaCita');
    app.use('/api/v1/devcamps/citas', registarCitasRouter)


    //const registarCitasRouter = require('./rutas/rutaCitas');
    //app.use('/api/v1/devcamps/citas', citasRouter)

    app.listen(puerto, () => {
        console.log(`El servidor se ha iniciado en el puerto ${puerto}`.bgMagenta.white)
    })
    
