import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import styles from './Header.module.css';

export const Header = (props) => {
    return (
      <header>
  
          
      
        <h1 className={(styles.apresenta)}> Olá mundo </h1>  
    
        <div className={(styles.centralizado)}>
          <Link to="/produtos" > <Button variant="contained" className={(styles.botao)}>Produtos</Button> </Link>
          
            
              <Link to="/produtos" > <Button variant="contained" className={(styles.botao)}>Mudar pagina</Button> </Link>
              <a> <Button variant="contained" className={(styles.botao)}>Mudar pagina</Button> </a>
              <a> <Button variant="contained" className={(styles.botao)}>Mudar pagina</Button> </a>
              <a> <button style={{ borderRadius: "30px" }}>Sair</button> </a>
            
        

        
        </div>
       
      </header>
      
    );
  };