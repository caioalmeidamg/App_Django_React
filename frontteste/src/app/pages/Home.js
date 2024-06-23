import { Footer } from '../components/Footer';
import { Quadro } from "../components/Quadro";
import { Header } from '../components/Header';

export const Home = (props) => {
  return (
    <>
      <Header />
        <Quadro nome = {props.nome} />
      <Footer />     
    </>   
  )
};