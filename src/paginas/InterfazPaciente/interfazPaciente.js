import React from 'react'
import NavbarCliente from '../../Components/NavbarCliente'
import Footer from '../../Components/Footer'
import '../../dist/css/interfazPaciente.css'


const InterfazPaciente = () => {
  return (
    <div>
        <NavbarCliente></NavbarCliente>


        <div className="container mt-4 ">
  <section>
    <h2>Bienvenido </h2>
    <p className="lead">Sistema dedicado a brindar atención médica de calidad a todos nuestros pacientes.</p>
    <p>Como equipo, estamos comprometidos con la salud y el bienestar de todos nuestros pacientes. Asi mismo nuestro objetivo es proporcionar un enfoque integral para el diagnóstico, tratamiento y prevención de enfermedades.</p>
  </section>
  <br>
    </br>
    <br />
        <br />
        <br />
        <br />
        <br />
  <section className="mt-4">
    <h2>Nuestro Servicios Destacados</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div className="card-body">
            <h5 className="card-title">Cardiología</h5>
            <p className="card-text">Evaluación y tratamiento de enfermedades cardiovasculares.</p>
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1666214280465-a40313304801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div className="card-body">
            <h5 className="card-title">Medicina Interna</h5>
            <p className="card-text">Enfoque integral para el diagnóstico y tratamiento de enfermedades internas.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src="https://plus.unsplash.com/premium_photo-1661270501104-596643cec818?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Servicio 3" />
          <div className="card-body">
            <h5 className="card-title">Consulta Preventiva</h5>
            <p className="card-text">Revisiones periódicas para mantener y mejorar la salud general.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


<br>
    </br>
    <br />
        <br />
        <br />
        <br />
        <br />
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

export default InterfazPaciente