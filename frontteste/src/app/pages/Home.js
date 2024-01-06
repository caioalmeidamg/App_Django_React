import { Footer } from "../shared/components/Footer";
import { Quadro } from "../shared/components/Quadro";
import { Header } from '../shared/components/Header';
import styles from './Home.module.css'

export const Home = (props) => {
  return (
    <div>
        <Header />
        <Quadro nome = {props.nome} />
        <Footer />     
    </div>      
    
  );
};