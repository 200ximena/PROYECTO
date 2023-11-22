import React from 'react'
import NavbarMedico from '../../Components/NavbarMedico'
import Footer from '../../Components/Footer'
import '../../dist/css/interfazMedico.css'

const InterfazMedico = () => {
  return (
    <div>
        <NavbarMedico></NavbarMedico>

        <header className=" text-black text-center header">
          <h1 className="display-4">Bienvenido</h1>
          <p className="lead">Médico Especialista</p>
        </header>

        <br>
        </br>
        <br>
        </br>
        <br>
        </br>

        <div className="card c1">
      <div className="card-header ">
        
      </div>
      <div className="card-body">
        <h5 className="card-title">No olvides atender las citas agendadas</h5>
        <p className="card-text">Tambien las puedes consultar mediante el menu de la parte superior</p>
        <a href="/register" class="btn btn-primary boton">Consultar mis citas</a>
      </div>
    </div>
        

    <div className="img1">
        <img src="https://plus.unsplash.com/premium_photo-1658506915122-d37e0d173c06?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Servicio 1" />
    </div>
          

    <br>
        </br>
        <br>
        </br>
        <br>
        </br>
       
        
        <Footer></Footer>
    </div>
  )
}

export default InterfazMedico