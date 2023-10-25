import { Link } from "react-router-dom";
import { Button, Stack } from 'react-bootstrap';
import { listaProduto } from "./apiComponents/ListaProdutos";

//teste do que será criado
function teste(a,b){
  return a+b;
}

/* Em react um componente possui a sua logica definida em JS como funções 
   |-> ele possui e possui uma função para renderização em jsx
   |-> uma especie de classe com métodos definidos e uma rederização

*/

export const Pagina1 = (props) => {
  return (

    <div>

      <header>
      <Stack direction="horizontal" gap={2}>
        <Button  variant="primary">
            
        </Button>
        <Button as="a" variant="success">
            Button as link
        </Button>
      </Stack>;  

      <div>
        
        <nav >
          <div >
            <Link to="/produtos" ><button></button></Link>
            <a>
              Pesquisar aluno
            </a>
            <a>
              Cadastrar aluno
            </a>
            <a>
              <button style={{ borderRadius: "30px" }}>Sair</button>
            </a>
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
        <h2> Opa, testando a prpriedade {props.nome}</h2>
      </body>

    </div>
  );
};