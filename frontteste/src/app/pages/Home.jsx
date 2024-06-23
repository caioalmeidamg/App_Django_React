import { Footer } from '../components/Footer';
import { Quadro } from "../components/Quadro";
import { Header } from '../components/Header';
import { StandartPage } from './StandartPage';

export const Home = (props) => {
  return (
    <StandartPage>
      <Quadro nome = {props.nome} />
    </StandartPage>   
  )
};