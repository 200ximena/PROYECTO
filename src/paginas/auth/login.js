import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Login2 = () => {
  //traer los datos| definir variables
        const [correo, setCorreo] = useState('');
        const [contraseña, setCon] = useState('');

        const [error, setError] = useState('');

        const navigate = useNavigate();

        const parseToken = (token) => {
          const decodedToken = token.split('.')[1];
          const decodedData = JSON.parse(atob(decodedToken));
          return decodedData;
        };

        const datosLogin = async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post('http://127.0.0.1:8888/api/v1/devcamps/users/login', {
              correo,
              contraseña:contraseña,
            });
            if (response.data && response.data.token) {
              //validar token
              const tokenPayload = parseToken(response.data.token);
              if (tokenPayload && tokenPayload.role) {  
                  const { token, numeroDocumento } = tokenPayload;        
                if (tokenPayload.role === 'medico') {
                  localStorage.setItem('token', response.data.token);
              localStorage.setItem('numeroDocumento', tokenPayload.numeroDocumento);
              localStorage.setItem('contraseña', tokenPayload.contraseña);
                  navigate('/InterfazMedico');
                } else if (tokenPayload.role === 'paciente') {
                  localStorage.setItem('token', token);
                  localStorage.setItem('correo', correo);
                  localStorage.setItem('contraseña', contraseña);
                  navigate('/InterfazPaciente');
                }
              }
            }
            setError('');
        } catch (error) {
          console.error('Error en el inicio de sesión:', error);
      
          if (error.response && error.response.data && error.response.data.msg) {
            setError('Error: ' + error.response.data.msg);
          } else {
            setError('Error en el inicio de sesión: ' + error.message);
          }
        }
      };

    return (
      <div>
        <Navbar></Navbar>
      
          <div className="login">
            <div className="login-box">
      <div className="login-logo">
        
      </div>
      <br/>
      
      <div className="card">
        <div className="card-body login-card-body">
          <h5 className="login-box-msg">BIENVENIDO A TU DOCTOR ONLINE</h5>
          {error && (
            <div className='mensajeE'>
            {error}
            </div>
        )}
          <form autoComplete='off' onSubmit={datosLogin}>            
            <div className="input-group mb-3">
              <input type="text" 
              className="form-control" 
              placeholder="Correo" 
              id="correo"
              name="correo"
              value={correo} 
              onChange={(e) => setCorreo(e.target.value)}
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
              value={contraseña} 
              onChange={(e) => setCon(e.target.value)}
              required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
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
   
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      

      <Footer></Footer>
</div>

    )
}

export default Login2;