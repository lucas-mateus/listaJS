class DoubleNode{
	constructor(value){
		this.previus = null;
		this.content = value;
		this.next = null
	}
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
    }

    //inserir no fim da lista
    append(value){
    	let newNode = new DoubleNode(value);

    	//caso seja a primeira inserção na lista
    	if(this.head == null){
    		this.head = newNode;
    	}else{
    		let current = this.head;
    		while(current.next !== null){ //navega na lista ate achar seu fim "current.next == null" para quando achar, inserir o newNode
    			current = current.next;
    		}
    		current.next = newNode; 	//aqui atribuimos o newNode para a posição vazia
    		newNode.previus = current; //newNode na posição previus recebe o current, e assim conseguimos fazer o duplo encadeamento
    	}
       
    }

    insert(position, value){
    	if(position>=0 && position<=this.size()){
            const newNode = new DoubleNode(value);

    	    if(position == this.size()){

                this.append(value)

            }else if (position == 0) {

                newNode.next = this.head;
                this.head.previus = newNode
                this.head = newNode;

            }else{
    		    
                let current = this.head, index = 0;
                while(index<position){
                    current = current.next;
                    index++
                }
                newNode.next = current;
                newNode.previus = current.previus;
                current.previus = newNode;
                newNode.previus.next = newNode; 
            }
    	}
    }

    //metodo indexOf criado para acharmos o index do valor que estamos buscando, para reaproveitar o metodo removeAt;
    indexOf(value){
        let current = this.head, index = 0;
        while(current!=null){
            if(current.content==value) //condição para verificar se o content do current é igual o valor desejado, se for, então achamos 
                return index;          // retornando o index do nosso valor

            current = current.next;
            index++
        }
        return -1;
    }

    remove(value){
        let index = this.indexOf(value); //usando metodo indexOf para acharmos o index do valor e atribuindo ele a variavel let
        return this.removeAt(index);    //removendo o valor com o removeAt a partir do index
    }

    removeAt(position){

        if(position >=0 && position<this.size()){

            let current = this.head, index = 0; 

            while(index<position){
                current = current.next
                index++
            }


            if(position == 0){
                this.head = current.next
                this.head.previus = null
                current.next = null

            }else if(current.next == null && current.previus == null){
                this.head = null;
            }else if (current.next !== null) {
                current.previus.next = current.next
                current.next.previus = current.previus
                current.previus = null
                current.next = null


            }else{
               current.previus.next = null
               current.previus = null
            }
            
            return current.content
        }

    }

    //metodo para sabermos o tamanho da lista
    size(){
        let length = 0; //variavel de iteração para contar o tamanho da lista
        for(let i = this.head; i !== null; i = i.next){ /*esse loop atraves de i percorremos por toda a head
                                                         ate que econtremos o final dela, i.next == null*/
            length++;
        }
        return length;  
    }

    //metodo para exibir
    toString(separator='-'){
        
        let output = ""; //essa variavel vai receber todo o conteudo da lista que sera exibido
        
        //se a head não estiver vazia
        if(this.head){
            for(let i=this.head; i!=null; i=i.next){ //esse loop percorre toda a head, ate o final dela, i.next == null
               output += i.content + separator;  //aqui colocamos o conteudo de i na variavel de saída;
            }
            output = output.substr(0,(output.length - separator.length));
        }
        return output;
    }

}
