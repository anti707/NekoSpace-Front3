import  React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organism/Navbar.jsx';
import HomeUser from './pages/homeUser.jsx';
import HomeAdmin from './pages/homeAdmin.jsx';
import Homeauth from './pages/Homeauth.jsx';
import Login from './pages/Login.jsx';
import Contacto from './pages/contacto.jsx';

function App() {
 return (
   <>
     <NavBar />
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomeAdmin />} />
        <Route path="/" element={<Homeauth />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
   </>
 );
}


export default App;
