import { Container, Row } from 'react-bootstrap';
import  ProyectCard from '../components/organism/ProyectCard.jsx';
import Producto from '../data/Producto.js';
import '../styles/card.css'
import '../styles/HomeUser.css'


function HomeUser() {
 return (
  <>
  <div className='fondo'>
   <Container className="welcome">
     <h1 className='titulo'>NekoSpace</h1>
     <p className='sub'>(˶o⩊o˶)</p>
     <p className='sub'>¡¡un espacio creado para ti¡¡</p>
     <p className='sub'>donde encontraras todo lo que nececitas o no creias nececitar</p>
     <p className='sub'>⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔ </p>
   </Container>

  </div>

    <div className='fon'>
      <h2 className='titulo2'>Prdocutos</h2>
      <Container className='pro'>
        <div>
          <h2 className='subt'>posters</h2>
          <div className='spice'>
            {Array.isArray(Producto) && Producto.map((item) => (<ProyectCard key={item.id}
            proyect={item} />
            ))}
          </div>
        </div> 
      </Container>
    </div>

    <div className='fon'>
      <Container className='pro'>
        <div>
          <h2 className='subt'>Figuritas</h2>
          <div className='spice'>
            {Array.isArray(Producto) && Producto.map((item) => (<ProyectCard key={item.id}
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