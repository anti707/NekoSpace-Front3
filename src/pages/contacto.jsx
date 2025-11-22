import { Container, Row } from 'react-bootstrap';
import  ProyectCard from '../components/organism/ProyectCard.jsx';
import Producto from '../data/Producto.js';
import '../styles/card.css'
import '../styles/Contacto.css'
import gatoSpace from '../assets/images/gatoSpace.webp'
import ContactoForm from '../components/organism/ContactoForm.jsx';

function Contacto() {
 return (
  <>
  <div className='fondo'>
   <Container className="welcome">
     <h1 className='titulo'>NekoContactos</h1>
     <img className='image' src={gatoSpace} alt="nekoSpace" />
     <p className='sub'>¡¡un espacio creado para ti¡¡</p>
     <p className='sub'>donde encontraras todo lo que nececitas o no creias nececitar</p>
     <p className='sub'>⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔ </p>
   </Container>

  </div>

    <div className='fon'>
      <Container className='pro'>
        <div>
          <h2 className='subt'>Contacto</h2>
          <ContactoForm/>
        </div> 
      </Container>
    </div>

  </>
 );

}


export default Contacto;