import { Container, Row } from 'react-bootstrap';
import  ProyectCard from '../components/organisms/ProyectCard.jsx';
import Proyecto from '../Data/Producto.js';
import '../styles/pages/card.css'
import '../styles/pages/Home.css'
import "../styles/pages/contacto.css"


function HomeUser() {
 return (
  <>
  <div className='fondo'>
   <Container className="welcome">
    <img className='image' src={gato} alt="facereveal" />
     <h1 className='titulo'>Antonia Tapia</h1>
     <p className='sub'>(˶o⩊o˶)</p>
     <p className='sub'>estudio informatica y amo los gatos</p>
     <p className='sub'> ₍^. .^₎⟆ mi mayor pasion es el terror y todo lo que tenga que ver con el mundo obscuro ₍^. .^₎⟆ </p> 
     <p className='sub'>⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔ </p>
   </Container>

  </div>

    <div className='fon'>
      <Container className='pro'>
        <div>
          <h2 className='subt'>proyectos</h2>
          <div className='spice'>
            {Array.isArray(Proyecto) && Proyecto.map((item) => (<ProyectCard key={item.id}
            proyect={item} />
            ))}
          </div>
        </div> 
      </Container>
    </div>

  </>
 );

}


export default HomeUser;