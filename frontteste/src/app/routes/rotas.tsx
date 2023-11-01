import { BrowserRouter, Route, Routes as Switch, Navigate  } from "react-router-dom";
import { Home } from "../pages/Home";
import { ListaProdutos } from "../shared/components/apiComponents/ListaProdutos";
import { Header } from "../shared/components/Header";
//Função carregada na App.js que executa as rotas necessárias
export const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          
          <Route path="/"  element={ <div><Header /> <Home nome = "caio" peso = "43"/></div> } />

          <Route path="/pagina-inicial" element={ <h1> teste </h1> } />

          <Route path="/produtos" Component={ListaProdutos} />   

        </Switch>
      </BrowserRouter>
    );
}

