import React from 'react'
import NavbarMedico from '../../Components/NavbarMedico'
import Footer from '../../Components/Footer'

const ConsultarCitas = () => {
  return (
    <div>

        <NavbarMedico></NavbarMedico>
        <div className="container mt-5">
  <h1 className="text-center">Citas Registradas</h1>
  <div className="row mt-4">
    <div className="col-md-6 mx-auto">
      <div className="card">
        <div className="card-header">
          Citas Registradas
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">Cita el 12 de diciembre de 2023 a las 10:00 AM</li>
            <li className="list-group-item">Cita el 15 de diciembre de 2023 a las 2:30 PM</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-4">
    <div className="col-md-6 mx-auto">
      <div className="card">
        <div className="card-header">
          Detalles de la Cita
        </div>
        <div className="card-body">
          <p><strong>Nombre:</strong> Pepito</p>
          <p><strong>Apellido:</strong>Perez</p>
          <p><strong>Fecha:</strong>23/09/2023</p>
          <p><strong>Hora:</strong> 2:00 PM</p>
          <p><strong>Numero de Autorizacion:</strong>129872MPVT5</p>
          <button className="btn btn-secondary mr-2" >
            Consultar Cita
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<Footer></Footer>

    </div>
  )
}

export default ConsultarCitas;