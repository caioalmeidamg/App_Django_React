export const Cabecalho = (props) => {
    return (
  
      <div>
  
        <header>
        <Stack direction="horizontal">
       
          <Link to="/produtos" > <Button variant="contained">Contained</Button> </Link>
          
        </Stack>  
  
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
        
       
  
      </div>
    );
  };