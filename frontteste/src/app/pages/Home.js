import { Link } from "react-router-dom";
import { listaProduto } from "../shared/components/apiComponents/ListaProdutos";
import { Button } from "@mui/material";
//teste do que será criado
function teste(a,b){
  return a+b;
}

/* Em react um componente possui a sua logica definida em JS como funções 
   |-> ele possui e possui uma função para renderização em jsx
   |-> uma especie de classe com métodos definidos e uma rederização

*/

export const Home = (props) => {
  return (

    <div>

      <header>
     
     
        <Link to="/produtos" > <Button variant="contained">Produtos</Button> </Link>
        
      

      <div>
        
        <nav >
          <div >
            <Link to="/produtos" ><button>mudar pagina</button></Link>
            <a> Pesquisar aluno </a>
            <a> Cadastrar aluno </a>
            <a> <button style={{ borderRadius: "30px" }}>Sair</button> </a>
          </div>
        </nav>

        <div className="rodape">
          <span>
            Todos os direitos reservados - 2023 &copy; Caio Almeida Santos-
          </span>
        </div>
      </div>
      </header>
      
      <body>
        <h1>{ teste(1,2) }</h1>
        <h2> Opa, testando a propriedade {props.nome}</h2>
      </body>

    </div>
  );
};