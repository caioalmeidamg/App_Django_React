import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { Home } from "../pages/Home";
import { Produtos } from "../pages/Produtos";
import { Header } from "../components/Header";
import { InserirProduto } from "../components/apiComponents/InserirProduto";
//Função carregada na App.js que executa as rotas necessárias
export const Rotas = () => {    
  const rotas = createBrowserRouter([
    {
      path: "/inserirProdutos", 
      element: InserirProduto(),
    },
    {
      path: "/",  
      element: <div> <Home nome = "caio" peso = "43" /> </div> 
    },
    {
      path:"/pagina-inicial", 
      element:  <h1> teste </h1> 
    },
    {
      path:"/produtos" , 
      element:  <Produtos/>
    }
    
  ])
  return (<RouterProvider router={rotas}/>)
} 
