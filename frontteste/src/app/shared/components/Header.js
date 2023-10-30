import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import styles from './Header.module.css';

export const Header = (props) => {
    return (
  
      <div >
          
      <header>
        <h1 className={(styles.apresenta)}> Olá mundo </h1>  
    
        <div className={(styles.centralizado)}>
          <Link to="/produtos" > <Button variant="contained">Produtos</Button> </Link>
          <nav >
            <div >
              <Link to="/produtos" ><button>mudar pagina</button></Link>
              <a> Pesquisar aluno </a>
              <a> Cadastrar aluno </a>
              <a> <button style={{ borderRadius: "30px" }}>Sair</button> </a>
            </div>
          </nav>

        
        </div>
      </header>
      </div>
    );
  };