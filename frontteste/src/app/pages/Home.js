import { Header } from "../shared/components/Header";
import { Footer } from "../shared/components/Footer";
import styles from "./Home.module.css"
//teste do que será criado
function teste(a,b){ return a+b; }

/* Em react um componente possui a sua logica definida em JS como funções 
   |-> ele possui e possui uma função para renderização em jsx
   |-> uma especie de classe com métodos definidos e uma rederização

*/

export const Home = (props) => {
  return (

    <div >
       <body>
       
          <div className={(styles.teste)}>
          <h1>{ teste(1,2) }</h1>
          <h2> Opa, testando a propriedade {props.nome}</h2>
          </div>
        <Footer />
      </body>
    </div>
      
    
  );
};