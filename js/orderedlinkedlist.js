
class OrderedLinkedList extends LinkedList{
	constructor(){
		super()
	}

    append(value) {
        const newNode = new Node(value)

        //vrefificando se é a primeira inserção na head, se for ja recebe diretamente o newNode
        if(this.head == null){
        	this.head = newNode;
        }else {
            let i = this.head;

            //criamos uma variavel i e atribuimos a head a ela para poder percorremos dentro da head e achar a sua ultima posição e inserir
            while (i.next != null) {
                i = i.next
            }
            //ultima posição recebe o novo nó
            i.next = newNode

            //daqui em diante será onde irá ocorrer a ordenação

            let newHead = this.head 	//a variavel newHead vai receber a head atualizada com o novo valor inserido
            let current = null,previus = null //essas duas variaveis vao servir para auxilir ordenação

            //primeiro while para percorrer dentro da head
            while (newHead != null) {
                current = newHead.next //atribuimos o proximo valor da head a variavel current

                //segundo while para entrarmos dentro do current
                while (current != null) {

                	//condicional para verificarmos se o valor que está dentro de newHead é maior que o seu próximo valor
                    if (parseInt(newHead.content) > parseInt(current.content)) {

                    	/*caso essa condição der verdadeira, significa que o valor do current.next 
                    	precisa vir primeiro que o valor do newHead.content,e é ai onde faremos as trocas
	
						a variaveu previus recebe o conteudo de newHead, nesse contexto previus serve como uma varivel auxilixar
                    	*/
                        previus = newHead.content 			//previus recebe o conteudo de newHead
                        newHead.content = current.content 	//newHead recebe o conteudo de current, pois essa é quem deve vir primeiro
                        current.content = previus 			/*current.content recebe previus, que está armazenando o 
                        									conteudo de newHead, e esse valor deve assumir a posição .next*/
                    }
                    current = current.next //interação do segundo while
                }
                newHead = newHead.next 	   //iteração do primeiro while
            }
           
        }
    }

    insert(position, value) {
        this.append(value)
        throw new Error("Não é permitido inserir na posição em listas ordenadas")
    }
	
}