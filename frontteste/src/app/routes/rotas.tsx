import { BrowserRouter, Route, Routes as Switch  } from "react-router-dom";
import { Home } from "../pages/Home";
import { ListaProdutos } from "../shared/components/apiComponents/ListaProdutos";
import { Header } from "../shared/components/Header";
import { InserirProduto } from "../shared/components/apiComponents/InserirProduto";
//Função carregada na App.js que executa as rotas necessárias
export const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route 
              path="/inserirProdutos"
              element = {InserirProduto()}
          />

          <Route 
              path = "/"  
              element = {<div> <Home nome = "caio" peso = "43" /> </div> } 
          />

          <Route 
              path="/pagina-inicial" 
              element={ <h1> teste </h1> } 
          />

          <Route 
              path="/produtos" 
              Component={ListaProdutos} 
          />   

        </Switch>
      </BrowserRouter>
    );
}

