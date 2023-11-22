const express = require('express')
const router = express.Router()
const userModel = require ('../modelos/modeloUsuario')

router.post('/register', 
            async(req, res)=>{
                const {nombre,apellido,tipoDocumento,numeroDocumento,correo,contraseña,rol} = req.body;
            try {
                const user = 
                await userModel.create({
                    nombre,
                    apellido,
                    tipoDocumento,
                    numeroDocumento,
                    correo,
                    contraseña,
                    rol
                })
            res
                .status(201)
                .json({
                    sucess: true,
                    msg: "usuario creado exitosamente"
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
            // Ruta para obtener doctores con disponibilidad
router.get('/disponibles', async (req, res) => {
    try {
      const { disponibilidad, role } = req.query;
  
      // Crear un objeto de filtro basado en los parámetros de consulta
      const filter = { role };
      if (disponibilidad) {
        filter.disponibilidad = disponibilidad === 'true'; // Convierte el string 'true' en un booleano true
      }
  
      const doctoresDisponibles = await userModel.find(filter);
  
      res.status(200).json({
        success: true,
        data: doctoresDisponibles,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });

  
//login 
router.post('/login', async (req, res) => {
    
    const {correo,contraseña}=req.body;

    //si no llega email o password
    if(!correo || !contraseña){
        res.status(400).json({
            success:false,
            message: "Debe ingresar el email o password"
        })
    }else{
        try {
            //encontrar usuario con el password
            const user = await userModel.findOne({ correo }).select("+password")
            
            //console.log(user)
            if (!user) {
                res.status(400).json({
                    success:false,
                    msg:"no se encontro el usuario"
                })
            }
            else{
                //comparar
                const isMatch = await user.comparePassword(contraseña)
                if(!isMatch){
                    res.status(400).json({
                        success: false,
                        msg:"contraseña incorrecta"
                        
                    })
                }else{
                    res.status(200).json({
                        success: true,
                        msg:"la contraseña es correcta"
                    })
                }
            }
        } catch (error) {
            
        }
    }
})

module.exports = router