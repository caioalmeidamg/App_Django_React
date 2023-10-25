import { Link } from "react-router-dom";
import { Button, Stack } from 'react-bootstrap';
import { listaProduto } from "./api/listaProdutos";

export const BotaoPadrap = () => {
  return (

    <div>

      <Link >
        
      </Link>

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
            <a >
              Pesquisar aluno
            </a>
            <a >
              Cadastrar aluno
            </a>
            <a >
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
    </div>
  );
};