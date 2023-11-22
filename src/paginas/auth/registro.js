import React, { useState } from "react";
import { Link, useSubmit } from "react-router-dom";
import { useEffect } from "react";
import swal from "sweetalert";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import '../../dist/css/registroCita.css'
import axios from "axios"




const Register = () => {

  const [user, setUsuario] = useState({
    nombre: '',
    apellido: '',
    tipoDocumento: '',
    numeroDocumento: '',
    correo: '',
    contraseña: '',
    rol:'paciente'
})

const { nombre, apellido, tipoDocumento, numeroDocumento, correo,contraseña,rol } = user;
const [error, setError] = useState('');
const [successMessage, setSuccessMessage] = useState('');

const handleRegister = async () => {
    try {

        const response = await axios.post('http://localhost:8888/api/v1/devcamps/users/register', user, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setSuccessMessage('Usuario creado con éxito');
        setError('');
    } catch (error) {
        if (error.response) {
            console.log('Respuesta del servidor:', error.response);
            if (error.response.data && error.response.data.message) {
                setError('Error: ' + error.response.data.message);
            } else {
                setError('Error en el registro: ' + error.message);
            }
        } else {
            setError('Error en el registro: ' + error.message);
        }
    }
};
const onChange = (e) => {
    setUsuario({
        ...user,
        [e.target.name]: e.target.value
    });
}



const onSubmit = (e) => {
    e.preventDefault();
    handleRegister()
};

    return (
      <div>
        <Navbar></Navbar>

      <div class="login">
      <div className="login-box">
<div className="login-logo">
 
</div>
<br/>

{successMessage && (
        <div className='mensajeE'>
            {successMessage}
        </div>
        )}
        {error && (
            <div className='mensajeError'>
            {error}
            </div>
        )}

<div className="card">
      <div className="card-body login-card-body">
        <h5 className="login-box-msg">Ingrese los datos solicitados</h5>
        
        <form onSubmit={onSubmit}>

          <div className="input-group mb-3">
            <input type="text" 
            className="form-control" 
            placeholder="Nombre" 
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={onChange}
            required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>

          <div className="input-group mb-3">
            <input type="text" 
            className="form-control" 
            placeholder="Apellido"
            id="apellido"
            name="apellido"
            value={apellido}
            onChange={onChange}
            required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>


          <select name="tipoDocumento" value={tipoDocumento} onChange={onChange}>
                    <option value="" selected hidden>Tipo De Documento</option>
                    <option value="ti">Cedula de ciudadania</option>
                    <option value="cc">pasaporte</option>
          </select>



          <div className="input-group mb-3">
            <input type="text" 
            className="form-control" 
            placeholder="Número de Documento" 
            id="numeroDocumento"
            name="numeroDocumento"
            minLength="6"
            value={numeroDocumento}
            onChange={onChange}
            required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-id-card" />
              </div>
            </div>
          </div>

          

          <div className="input-group mb-3">
            <input type="email" 
            className="form-control" 
            placeholder="Correo" 
            id="correo"
            name="correo"
            value={correo}
            onChange={onChange}
            required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>

          <div className="input-group mb-3">
            <input type="password" 
            className="form-control" 
            placeholder="Contraseña" 
            id="contraseña"
            name="contraseña"
            minLength="6"
            value={contraseña}
            onChange={onChange}
            required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>

          <div className="input-group mb-3" style={{ display: 'none' }}>
          <input type="text" 
          className="form-control" 
          placeholder="Rol" 
          id="rol"
              name="rol"
              value={rol}
              onChange={onChange}
              required
              />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>

        <div className='control'>
        <button  className="btn btn-flex btn-primary md-2 ml-2 p-2" type="submit">
              <i className="fab mr-2" /> INGRESAR    
              </button>
        </div>
        
        </form>
        </div>
      </div>
    </div>
    </div>
 
<br>
      </br>
      <br>
      </br>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /><br />
      
      

      <Footer></Footer>
</div>
    )
}

export default Register;