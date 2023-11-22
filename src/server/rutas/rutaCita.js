const express = require('express')
const router = express.Router()
const citaModel = require ('../modelos/modeloCitas')

router.post('/registerCita', 
            async(req, res)=>{
                const {numeroDocumento,nombre,apellido,correo,fechaCita,horaCita, numAutorizacion} = req.body;
            try {
                const cita = 
                await citaModel.create({
                    numeroDocumento,
                    nombre,
                    apellido,
                    correo,
                    fechaCita,
                    horaCita,
                    numAutorizacion
         })
            res
                .status(201)
                .json({
                    sucess: true,
                    msg: "cita creada exitosamente"
                })
                } catch (error) {
                    res
                        .status(400)
                        .json({
                            sucess: false,
                            message: error.message
                        })
                    
                }

            })




module.exports = router