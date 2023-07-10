
let items = localStorage.getItem('itemList')
items = items ? items.split(',') : []
//Si la variable items existe con información lo separa por coma 
//sino, se convierte en un arreglo.   Esto se llama Operador Ternario.
showItem()

function addItem(){
    let item = document.getElementById('cat').value 
    console.log(item)
    if(item){
        items.push(item)
        showItem()
    }
}

function showItem(){
    document.getElementById('cat').value =''
    let html = ''
for (let i = 0; i < items.length; i++) {
    //html = html + '<div class="col-10 mb-3">' + items[i] + '</div>'
    //html = html + '<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteItem(' + i + ')"> </a> </div>'
    html += `<div class="col-10 mb-3"> ${items[i]} </div>`
    html += `<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteItem(${i})"> X </a> </div>`
}

    localStorage.setItem('itemList',items)
    document.getElementById('items').innerHTML = html
}
function deleteItem(item){
    items.splice(item,1)
    showItem()
}

