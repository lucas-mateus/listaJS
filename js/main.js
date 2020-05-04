var list = new OrderedLinkedList();

$().ready(function(){
    $('#insert').click(insertElement)
    $('#insert_at').click(insertElementAt)
    $('#remove').click(removeElement)
    $('#remove_at').click(removeElementAt)
})

function showData(){
    let text = `<div class="ui label">
                    ${list.toString('</div><div class="ui label">')}
                </div>`
    let out = $('#output');
    out.empty()
    out.append(text)
}
function insertElement(){
    let val = prompt('digite um valor a ser inserido:')
    list.append(val)
    showData();
}
function insertElementAt(){
    
    try {
        let val = prompt('digite um valor a ser inserido:')
        let pos = prompt('digite uma posição a inserir:')
        list.insert(pos, val)
        showData();
        
    } catch(error) {
        alert(error);
    }
}
function removeElement(){
    let val = prompt('digite um valor a ser removido:')
    list.remove(val)
    showData();
}
function removeElementAt(){
    let pos = prompt('digite uma posição a remover:')
    if(pos.length < 0 ) return;
    let el = list.removeAt(pos)
    if(el){
       alert(`Removido o elemento ${el}`)
    }else{
        alert("Posição inválida")
    }
    showData();
}