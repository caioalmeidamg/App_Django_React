import styles from './Home.module.css'
import { Footer } from "../shared/components/Footer";
import { Quadro } from "../shared/components/Quadro";
import { Header } from '../shared/components/Header';
//teste do que será criado
function teste(a,b){ return a+b; }

/* Em react um componente possui a sua logica definida em JS como funções 
   |-> ele possui e possui uma função para renderização em jsx
   |-> uma especie de classe com métodos definidos e uma rederização

*/

export const Home = (props) => {
  return (

    <div >
      <Header />
      <Quadro nome = {props.nome} />
      <Footer />
      
    </div>
      
    
  );
};