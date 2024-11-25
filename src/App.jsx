import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/UserContext';  
import Home from "./pages/Home";
import Principal from "./pages/Principal";
import Ofertas from "./pages/Ofertas";
import Contactos from "./pages/Contactos"; 
import AcercaDe from "./pages/AcercaDe"; 
import Perfil from "./pages/Perfil";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login";
import ConfReserva from "./pages/ConfReserva";

function App() {
  return (
    <UserProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Principal" element={<Principal />} />
          <Route path="/Ofertas" element={<Ofertas />} />
          <Route path="/Contactos" element={<Contactos />} />
          <Route path="/ConfReserva" element={<ConfReserva />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/AcercaDe" element={<AcercaDe />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
