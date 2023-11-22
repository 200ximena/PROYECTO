const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt =require('jsonwebtoken')

//campos de la tabla y sus restricciones 
const userSchema = new mongoose.Schema(
    {
        nombre:{
            type:String,
        },
        apellido:{
            type:String,
        },
        tipoDocumento:{
            type:String,
        },
        numeroDocumento:{
            type:String,
            unique:[true,"Este Numero de documento ya existe"]
        },
        correo:{
            type:String,
        },
        contraseña:{
            type:String,
            min:6,
            unique: [true]
        },
        rol:{
            type:String,
            enum:[
                "paciente",
                "medico"
            ]
        },
    }
)

//token de la contraseña que el usuario registro, para inciar sesion
userSchema.method.ObtenerTokenJWT = function(){
    const JWT_SECRET_KEY = "HOLAA"
    return jwt.sign({
        id:this._id,
        correo: this.correo,
        contraseña: this.contraseña
    },
        JWT_SECRET_KEY,
        {
            expiresIn: Date.now() +10000
        }
    )
}

userSchema.method.comparacionContrasena = async function(contraseña){
    return await bcryptjs.compare(contraseña, this.contraseña)
}
const User = module.exports = mongoose.model('User',userSchema)
