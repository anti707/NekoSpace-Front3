import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/Navbar';
import HomeUser from './pages/HomeUser';

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
