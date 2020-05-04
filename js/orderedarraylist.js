class OrderedArrayList extends ArrayList {

	constructor(){
		super()
	}

	append(value){

		if(this.data.length == 0){
			return super.append(value);  //usando o metodo append da classe pai para inserir no array caso seja a primeira inserção
		}

		let index = 0;
		//se nao for, percorremos o array conferindo os valores da posição 
		for(index =0; index<this.data.length; index++){
			if(this.data[index]>=value){
				//quando achamos o index do valor que é maior que o novo valor que queremos inserir
				// é no lugar desse index que devemos inserir o novo valor
				break; //o break para parar o while, pois achamos o index
			}
		}
		// entao a partir do metodo splice, colocamos o novo valor no index, não apagando nenhum valor
		//os valores q vem depois serao deslocados tranquilamente
		this.data.splice(index, 0, value)
	}

	insert(position, value){
		this.append(value)
		throw new Error("Não é possível inserir na posição em uma lista ordenada")
	}
}