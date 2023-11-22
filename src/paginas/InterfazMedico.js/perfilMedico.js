import React from 'react'
import NavbarMedico from '../../Components/NavbarMedico'
import Footer from '../../Components/Footer'

const PerfilMedico = () => {
  return (
    <div>
        <NavbarMedico></NavbarMedico>
        <div className="container mt-5">
            <h1 className="text-center">Mi Perfil</h1>
            <div className="row mt-4">
                <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-header">
                    MI INFORMACION
                    </div>
                    <div className="card-body">
                    <p><strong>Nombre:</strong> Pepito</p>
                    <p><strong>Apellido:</strong>Perez</p>
                    <p><strong>Tipo de documento:</strong>Pasaporte</p>
                    <p><strong>Numero de documento:</strong>1098762542</p>
                    <p><strong>Correo Electrónico:</strong> pepito@gmail.com</p>
                    <p><strong>Contraseña:</strong>123pepito</p>
                    <button className="btn btn-secondary mr-2" >
                        Actualizar
                        </button>
                    <button className="btn btn-danger" >
                        Eliminar Perfil
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
                           
            <br />
            <br />
            <br />
            <br />





        <Footer></Footer>
    </div>
  )
}

export default PerfilMedico