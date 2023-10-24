import { BrowserRouter, Route, Routes as Switch, Navigate  } from "react-router-dom";


export const Routes = () => {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" element={<h1>Olá mundo</h1>} />
        <Route path="/pagina-inicial" element={<h1>teste</h1>} />
      </Switch>
      </BrowserRouter>
    );
}

