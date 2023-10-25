import { BrowserRouter, Route, Routes as Switch, Navigate  } from "react-router-dom";
import { BotaoPadrap } from "../shared/components/botao";
import { listaProduto } from "../shared/components/api/listaProdutos";
//Função carregada na App.js que executa as rotas necessárias
export const Routes = () => {
    return (
      <BrowserRouter>
      <Switch>
    
        <Route path="/" 
            element={
              <div>
                <h1>Olá mundo</h1> 
                <BotaoPadrap />
              </div>
            }
        />

        <Route path="/pagina-inicial" element={<h1>teste</h1>} />

        <Route path="/produtos" Component={listaProduto} />   
             
      </Switch>
      </BrowserRouter>
    );
}

