
class LinkedList{
    constructor(){
        this.head = null;
    }

    //inserir no fim do array
    append(value){

        //instancia da classe Node(onde irá se criar os nós do encadeamento)
        const newNode = new Node(value);
        
        //verifica se a head está vazia caso seja a primeira vez que se está inserindo algum valor
        if(this.head == null){
            this.head = newNode; //atribuimos newNode a head e assim temos nosso primeiro valor inserido
        }else{

            let i = this.head;

            //laço de repetição para encontrar o fim do encadeamento contendo o valor null
            while (i.next != null) {
                i = i.next;
            //quando encontrado a posição next contendo null, atribui-se ela a i
            }

            //inserindo o newNode na posição i.next pois essa está assumindo o valor null (fim do array)
            i.next = newNode;
        }
    }

    insert(position, value){
        
        if(position>=0 && position <= this.size()){
            let newNode = new Node(value),
            index = 0,
            current = this.head,
            previus = null

            //inserindo na primeira posição
            if(position == 0){
                newNode.next = current
                this.head = newNode
            }else{

            //loop para achar o index da posição desejada para fazer a inserção
               while(index<position){
                //
                    previus = current;
                    current = current.next;
                    index++;
               }
                previus.next = newNode;
                newNode.next = current;
            }

        }
        return null;
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
        if(position>=0 && position<=this.size()){
            let current = this.head, 
            previus = null, 
            index = 0;

            //removendo o primeiro elemento
            if(position == 0){
                //fazemos a head apontar para o current.next para o current que está assumindo o this.head na posição zero, receber null
                this.head = current.next;
            }else{
                //loop para remover no meio e no fim
                while(index!=position){

                    previus = current;      //previus recebe current
                    current = current.next; //current recebe o proximo, ate que o index seja igual a posição
                    index++;
                    //assim fazemos com que a lista seja percorrida
                }
                previus.next = current.next; /* quando acharmos a posição desejada,
                                            previus.next vai receber o current.next, para que em seguida
                                            current.next receber o valor null e assim excluimos a referencia a ele */ 
            }
                current.next = null; // aqui é onde retiramos a referencia para o valor que desejamos exluir
                return current.content; 
        }

        return null;
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
