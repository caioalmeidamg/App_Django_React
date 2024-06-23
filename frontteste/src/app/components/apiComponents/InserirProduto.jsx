import { useState } from "react"
import { Header } from '../Header'
import styles from '../../css/Quadro.module.css'

export function InserirProduto(props) {

    const [produto, setProduto] = useState({
        nome: '',
        descricao: '',
        preco: '',
        estoque: ''
    })


    const capturaAlteracao = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        // Convertendo os campos preco e estoque para números
        const valorNumerico = name === 'preco' || name === 'estoque' ? parseFloat(value) : value;
    
        setProduto({ ...produto, [name]: valorNumerico });
    };

    const enviaSubimissao = async (event) => {
        event.preventDefault();
    
        try {
            console.log(produto)
            // Lógica para enviar os dados usando uma requisição POST
            const resposta = await fetch('produtos/', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(produto),
            });
        
            if (resposta.ok) {
                console.log('Requisição POST bem-sucedida!');
                
            } else {
                console.error('Erro na requisição POST');
            }

        } catch (erro) {
          console.error('Erro ao enviar a requisição POST:', erro);
        }
    };


    return(
        <div >  
            <Header />
            <form onSubmit = { enviaSubimissao } className = {(styles.quadro)}>
                <h1> Cadastro de produt </h1><br/>
                <label>
                    <h2> nome do produto </h2> 
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        maxLength="98"
                        onChange = { capturaAlteracao }
                    /><br/>
                </label>
                <label>
                    <h2> descrição </h2>
                    <input 
                        type = "text" 
                        id = "descricao" 
                        name = "descricao" 
                        onChange = { capturaAlteracao }
                    /><br/>
                </label> 
                <label>
                    <h2> preço </h2>
                    <input 
                        type = "number"
                        name = "preco"
                        maxLength= "10"   
                        onChange = { capturaAlteracao }                   
                    /><br/>
                </label> 
                <label>
                    <h2> estoque </h2>
                    <input 
                        type = "number"
                        name = "estoque"     
                        onChange = { capturaAlteracao }                    
                    /><br/>
                </label> 
                <input type="submit" />
            </form>
        </div>
    )
}