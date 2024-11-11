import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Ppal from "./pages/Principal";
import Ofertas from "./pages/Ofertas";
import Contactos from "./pages/Contactos"; 
import AcercaDe from "./pages/AcercaDe"; 
import Test from "./pages/Test"; 
import UserProfile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Principal" element={<Ppal />} />
        <Route path="/Ofertas" element={<Ofertas />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/AcercaDe" element={<AcercaDe />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
