import  React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organism/Navbar.jsx';
import HomeUser from './pages/homeUser.jsx';
import HomeAdmin from './pages/homeAdmin.jsx';
import Homeauth from './pages/Homeauth.jsx';

function App() {
 return (
   <>
     <NavBar />
     <Routes>
       <Route path="/" element={<HomeUser />} />
       <Route path="/" element={<HomeAdmin />} />
       <Route path="/" element={<Homeauth />} />
     </Routes>
   </>
 );
}


export default App;
