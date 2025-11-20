import  React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organism/Navbar.jsx';
import HomeUser from './pages/homeUser.jsx';

function App() {
 return (
   <>
     <NavBar />
     <Routes>
       <Route path="/" element={<HomeUser />} />
     </Routes>
   </>
 );
}


export default App;
