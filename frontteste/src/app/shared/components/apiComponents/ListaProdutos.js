import React, { Component } from 'react';
import axios from 'axios';
import { botao } from '../../../pages/dashboard';
import  styles from './ListaProdutos.module.css';
//Classe para produzir uma componente

//Essa classe permite com que tratemos a Api em django

export class ListaProdutos extends Component {
    //O constructor funciona como um declarador dos atributos da classe
    constructor(){
        super();
        this.state = {
            produtos: [],
        }; 
    }

    //método chamado após um componente ser montado - uma especie de constructor
    componentDidMount() {
        const api = axios.create({ baseURL:'http://localhost:8000/produtos/', });

        //Isso basicamente é uma promise, ele cria uma "api" localmente e realiza um get na url cadastrada
        api.get().then((response) => {
            //seta estados com o body da response
            this.setState({ produtos: response.data });
        })

        //caso a promise não retorne ele pega o erro
        .catch((error) => {
        console.error('Erro ao buscar dados da API: ', error);
        });
    }

    //método utilizado para renderizar o JSX da componente
    render() {
        const { produtos } = this.state;
        return (
            <div className ={styles.div1}>
            <h1>Lista de Produtos</h1>
            <ul className= {styles.lista}>
                {produtos.map((produto) => (
                    <li className= {styles.item} key={produto.id}> <p> {produto.nome} - R${produto.preco} </p></li>
                ))}
            </ul>
            <botao />
            </div>
        );
    }
}

