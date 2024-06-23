export class Produtos {
   constructor(){
      this.carregaProdutos();
   }

    async carregaProdutos(){
        try {
            const response = await fetch('/produtos/');   
            if(!response.ok()) throw new error;         
            const data = await response.json();
            this.produtos = data;

        } catch (error) {
            throw error;
        }
    } 

    getProdutos() {
        return this.produtos;
    }

}    
    


