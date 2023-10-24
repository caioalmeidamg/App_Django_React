import { BrowserRouter, Route, Routes as Switch, Navigate  } from "react-router-dom";
import { BotaoPadrap } from "../shared/components/botao";
//Função carregada na App.js que executa as rotas necessárias
export const Routes = () => {
    return (
      <BrowserRouter>
      <Switch>
      /* --------- Rota ----------- */
        <Route path="/" 
               element={
                  <div>
                    <h1>Olá mundo</h1> 
                    <BotaoPadrap />
                  </div>
                }
        />
      /* --------- Rota ----------- */  
        <Route path="/pagina-inicial" element={<h1>teste</h1>} />
      </Switch>
      </BrowserRouter>
    );
}

