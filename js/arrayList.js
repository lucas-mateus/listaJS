
class ArrayList{
    constructor(){
        this.data = [];
    }

    //append insere um valor no final do array;
    append(value){
        return this.data.push(value);
    }

    //insert insere um valor na posição desejada/específica;
    insert(position, value){
        
        if(position>=0 && position <= this.data.length){
            this.data.splice(position, 0, value)
        }

        return;
    }

    //remove vai remover o elemtento desejado a partir do VALOR desejado;
    remove(value){
        for(let i = 0; i<this.data.length; i++ ){
            if(this.data[i] == value){
                return this.data.splice(i,1)
            }
        }
    }

    //removeAt vai remover o elemento a partir da POSIÇÃO desejada utilizando o método splice; 
    removeAt(position){
        if(position>=0 && position<this.data.length){
            return this.data.splice(position,1)
        }
    }

    //retorna o tamanho do array
    size(){
        return this.data.length;
    }

    /*transforma o array em uma string a partir de um separador,
      caso o separador não seja passado nos parâmetros, separator assume
      um valor padrão: ' - ';
    */
    toString(separator='-'){
        return this.data.join(separator);
    }

}