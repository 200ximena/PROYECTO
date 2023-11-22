import React,{Fragment} from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Login2 from './paginas/auth/login';
import Register from './paginas/auth/registro';
import InterfazPaciente from './paginas/InterfazPaciente/interfazPaciente';
import PerfilPaciente from './paginas/InterfazPaciente/perfilPaciente'

import Home from './paginas/Home';
import InterfazMedico from './paginas/InterfazMedico.js/interfazMedico';
import ConsultarCitas from './paginas/InterfazMedico.js/consultarCitas'
import PerfilMedico from './paginas/InterfazMedico.js/perfilMedico';
import FormularioCita from './paginas/InterfazPaciente/formularioCita'


function App() {
  return (
    <Fragment>
    <Router>
      <Routes>
        
        <Route path="/" exact element= {<Home/>}>
        </Route>
        <Route path="/login" exact element= {<Login2/>}>
        </Route>
        <Route path="/register" exact element= {<Register/>}>
        </Route>
        <Route path="/interfazPaciente" exact element= {<InterfazPaciente/>}>
        </Route>
        
        <Route path="/InterfazPaciente" exact element= {<InterfazPaciente/>}>
        </Route>
        <Route path="/InterfazMedico" exact element= {<InterfazMedico/>}>
        </Route>
        <Route path="/FormularioCita" exact element= {<FormularioCita/>}>
        </Route>

        <Route path="/ConsultarCitas" exact element= {<ConsultarCitas/>}>
        </Route>

        <Route path="/PerfilPaciente" exact element= {<PerfilPaciente/>}>
        </Route>

        <Route path="/PerfilMedico" exact element= {<PerfilMedico/>}>
        </Route>

       

      </Routes>
    </Router>
  </Fragment>

  

  );
}

export default App;