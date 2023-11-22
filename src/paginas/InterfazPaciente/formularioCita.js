import React, { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import NavbarCliente from '../../Components/NavbarCliente';
import Footer from '../../Components/Footer';

const FormularioCita = () => {

      const [cita, setCita] = useState({
        numeroDocumento: '',
        nombre: '',
        apellido: '',
        fecha: '',
        hora:'',
        numAutorizacion:''
      });

      const { numeroDocumento, nombre, apellido, correo, fecha,hora,numAutorizacion} = cita;
      const [error, setError] = useState('');
      const [successMessage, setSuccessMessage] = useState('');
      const [menuOpen, setMenuOpen] = useState(false);
      const location = useLocation();

      const registroCita = async () => {
        try {
          const { numeroDocumento, nombre, apellido, correo, fecha,hora,numAutorizacion } = cita;
      
          // Buscar doctores con disponibilidad
          const responseDoctores = await axios.get(
            `http://localhost:8888/api/v1/devcamps/users/disponibles?disponibilidad=true&role=doctor`
          );
      
          const doctoresDisponibles = responseDoctores.data.data;
      
          if (doctoresDisponibles.length > 0) {
            const doctorId = doctoresDisponibles[0]._id;
      
            // Registrar la cita
            const responseCita = await axios.post(
              'http://localhost:8888/api/v1/devcamps/citas',
              {
                numeroDocumento,
                nombre,
                apellido,
                fecha,
                hora,
                numAutorizacion
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
      
            setSuccessMessage('Su cita fue registrada con exito');
            setError('');
      
            // Actualizar la disponibilidad del doctor después de agendar la cita
            await axios.patch(
              `http://localhost:8888/api/v1/devcamps/users/${doctorId}`,
              {
                disponibilidad: false, // Cambia a false ya que el doctor ya no estará disponible después de agendar la cita
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
          } else {
            setError('No hay doctores disponibles disponibles');
          }
        } catch (error) {
          console.error('Error en el registro:', error);
      
          if (error.response) {
            console.log('Respuesta del servidor:', error.response);
            if (
              error.response.status === 500 &&
              error.response.data &&
              error.response.data.message
            ) {
              setError('Error: ' + error.response.data.message);
            } else {
              setError('Error: fecha y hora agendadas, solo puedes registrar una cita');
            }
          } else {
            setError('Error en el : ' + error.message);
          }
        }
      };
    
      const onChange = (e) => {
        setCita({
          ...cita,
          [e.target.name]: e.target.value,
        });
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
        registroCita();
      };
    
      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    
      const handleLogout = () => {
        // Limpiar localStorage al cerrar sesión
        localStorage.removeItem('name');
        // Redirigir a la página de inicio de sesión
        // Puedes usar useHistory() o Link para redirigir según tu configuración de enrutamiento
        window.location.href = '/';
      };
      


  
  return (
    <div>
      <NavbarCliente></NavbarCliente>
      


        <div className="login-box registro">
          <div className="login-logo">
            
        </div>
<br/>

    <div className="card">
      <div className="card-body login-card-body">
        <h5 className="login-box-msg">REGISTRA TU CITA</h5>
        <form >

        <div className="input-group mb-3">
            <input type="number" className="form-control" 
            placeholder="Número de Documento" 
            id="numDocumento"
            name="numeroDocumento"
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
        <input type="text" className="form-control" 
        placeholder="Nombre" 
        id="nombre"
            name="nombre"
            value={nombre}
            onChange={onChange}
            required
            />
        <div className="input-group-append">
          <div className="input-group-text">
          <span class="fas fa-user"></span>
          </div>
        </div>
      </div>

      <div className="input-group mb-3">
        <input type="text" className="form-control" 
        placeholder="Apellido" 
        id="apellido"
            name="apellido"
            value={apellido}
            onChange={onChange}
            required
            />
        <div className="input-group-append">
          <div className="input-group-text">
          <span class="fas fa-user"></span>
          </div>
        </div>
      </div>


      <div className="input-group mb-3">
        <input type="email" className="form-control" 
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
            <input type="date" className="form-control" 
            placeholder="Fecha"
            id="Fecha"
            name="fecha"
            value={fecha}
            onChange={onChange}
            required
            /> 
            <div className="input-group-append">
              
            </div>
          </div>
      
          <div className="input-group mb-3">
            <input type="time"  className="form-control" 
            placeholder="Hora" 
            id="hora"
            name="hora"
            value={hora}
            onChange={onChange}
            required
            /> 
            <div className="input-group-append">
             
            </div>
          </div>

        <div className="input-group mb-3">
            <input type="number" className="form-control" 
            placeholder="Número de Autorizacion" 
            id="numAutorizacion"
            name="numAutorizacion"
            value={numAutorizacion}
            onChange={onChange}
            required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-id-card" />
              </div>
            </div>
        </div>

        <div className='control'>
              <button  className="btn btn-flex btn-primary md-2 ml-2 p-2" type="submit">
              <i className="fab mr-2" /> REGISTRAR CITA    
              </button>
          </div>
          
    </form>
    
      </div>
    </div>
    </div>

    <br>
    </br>
    <br>
    </br>

    <Footer></Footer>

    </div>
  )
}

export default FormularioCita