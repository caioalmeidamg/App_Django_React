import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import styles from './Header.module.css';
import Sidebar from "./sidebarComponents/Sidebar";



export const Header = (props) => {
    return (
      <header>
  
          
        <Sidebar nome="Olá mundo"/>
    
        <div className={(styles.centralizado)}>
          <Link to="/" > <Button variant="contained" className={(styles.botao)}>Home</Button> </Link>
          
            
              <Link to="/produtos" > <Button variant="contained" className={(styles.botao)}>Produtos</Button> </Link>
              <a> <Button variant="contained" className={(styles.botao)}>Mudar pagina</Button> </a>
              <a> <Button variant="contained" className={(styles.botao)}>Mudar pagina</Button> </a>
              <a> <button style={{ borderRadius: "30px" }}>Sair</button> </a>
            
        

        
        </div>
       
      </header>
      
    );
  };