import { Link, Route } from "react-router-dom"

export const BotaoPadrap = () => {
    
    return(  
           <div>  
           /* Essa tag link serve como a tag a de html, ou seja, consigo fazer linkagem entre paginas com ela */ 
           <Link to="http://localhost:3000/pagina-inicial"><button>TESTE</button></Link>  
            
            </div> 
    )
}