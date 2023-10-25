import { Link } from "react-router-dom";
import { Button, Stack } from 'react-bootstrap';

export const BotaoPadrap = () => {
  return (

    <div>

      <Link to="http://localhost:3000/pagina-inicial">
        <button>TESTE</button>
      </Link>

      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
            Button as link
        </Button>
        <Button as="a" variant="success">
            Button as link
        </Button>
      </Stack>;  
      <div>
        
        <nav className="emcima navbar navbar-expand-lg">
        





          <div className="collapse navbar-collapse justify-content-end" id="navbarMobile">
            <a className="minhaCuston nav-item nav-link" href="">
              Home
            </a>
            <a className="minhaCuston nav-item nav-link" href="">
              Pesquisar aluno
            </a>
            <a className="minhaCuston nav-item nav-link" href="">
              Cadastrar aluno
            </a>
            <a className="minhaCuston nav-item nav-link" href="">
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