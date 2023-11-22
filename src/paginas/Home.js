import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../dist/css/homeStyles.css'
import '../dist/img/1.jpg'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <br />
        <br />
        <br />
        <br />
        <br />

       <div className="container mt-4 cont1">
      <div className="row">
        <div className="col-md-8">
          <h2>Bienvenido a nuestro centro hospitalario online!!</h2>
          <p className="lead">Ofrecemos los mejores servicios médicos para cuidar de tu salud.</p>
          <p>En nuestro hospital, nos esforzamos por brindar atención médica de calidad a nuestros pacientes. Contamos con un equipo de profesionales altamente capacitados y tecnología de vanguardia para garantizar tu bienestar.</p>
        </div>
    <div className="col-md-4">
          <img 
          src="https://images.unsplash.com/photo-1576765975429-d2d8cf8c0ba0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="TDO" className="img-fluid rounded" />
        </div>
      </div>
    </div>
        
       
        <br />
        <br />
        <br />
        <br />


    <br>
    </br>
    <div className="cont1">
    <section className="mt-4">
    <h2>Siempre dispuestos a ayudarte</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div className="card-body">
            <h5 className="card-title">especialistas</h5>
            <p className="card-text">Contamos con los mejores especialistas, dispuestos ayudarte y dar soluciones a las afectaciones que tengas.</p>
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="card">
          <img src="https://plus.unsplash.com/premium_photo-1661772484028-74016b213190?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Servicio 2" />
          <div className="card-body">
            <h5 className="card-title">Sistema</h5>
            <p className="card-text">Con nuestro sistema online mejoramos la atencion hacia los paientes, siend mas eficaz al momet de pedir tus citas!!</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src="https://plus.unsplash.com/premium_photo-1661501755626-ee240f87e162?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Servicio 3" />
          <div className="card-body">
            <h5 className="card-title">Consulta Preventiva</h5>
            <p className="card-text">TU DOCTOR ONLINE te ofrece el mejor servicio, no dudes en elejirnos!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    <br>
    </br>

    <section className="mt-4">
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div className="card-body">
            <h5 className="card-title">Actitud</h5>
            <p className="card-text">Nuestro centro siempre esta dispuesto ayudarte.</p>
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1596354762473-6706bf6d5626?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div className="card-body">
            <h5 className="card-title">Equipo</h5>
            <p className="card-text">El equipo de trabajo , siempre esta disponible para cada uno de ustedes</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Servicio 3" />
          <div className="card-body">
            <h5 className="card-title">Citas</h5>
            <p className="card-text">Para hacer el proceso mas rapido, puedes agendar tu cita onlin!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>


  <div className="container mt-4 cont1">
      <div className="row">
        <div className="col-md-8">
          <h2>registra tu cita ahora!!</h2>
          <h5 className="card-title">Con nuestro sistema es muy sencillo</h5>
        <p className="card-text">Pero recuerda que tienes que registrarte primero.</p>
        <a href="/register" class="btn btn-primary boton">Registrarme</a>
        </div>
   
      </div>
    </div>






    <br>
    </br>
    <br />
        <br />
        <br />
        <br />
        <br />


        <Footer></Footer>
    </div>
  )
}

export default Home