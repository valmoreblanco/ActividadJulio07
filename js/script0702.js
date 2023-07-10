
let items = localStorage.getItem('itemList')
items = items ? JSON.parse(items) : []

showItem()

function addItem(){
    let pedidoItem = document.getElementById('pedido').value 
    let cantItem = document.getElementById('cant').value 
    let productoItem = document.getElementById('producto').value 
    let valorItem = document.getElementById('valor').value 
     
    //JSON es un objeto binario que viene en tipo String y se debe modificar
    //para que se cumpla que es un objeto
    if (pedidoItem && cantItem && productoItem && valorItem) {
        items.push({'nroPedido':pedidoItem, 'cantidad':cantItem, 'nomproducto':productoItem,'elvalor':valorItem})
        showItem()
    }

}

function showItem(){
    document.getElementById('pedido').value =''
    document.getElementById('cant').value =''
    document.getElementById('producto').value =''
    document.getElementById('valor').value =''

    let html = ''
    items.forEach((elemen,index) => {
        html += `<div class="col-4 mb-3"> ${elemen.nroPedido} </div>`
        html += `<div class="col-4 mb-3"> ${elemen.cantidad} </div>`
        html += `<div class="col-2 mb-3"> ${elemen.nomproducto} </div>`
        html += `<div class="col mb-3"> ${elemen.elvalor} </div>`
        html += `<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteItem(${index})"> X </a> </div>`

    });

    localStorage.setItem('itemList',JSON.stringify(items))
    document.getElementById('items').innerHTML = html
}
function deleteItem(item){
    items.splice(item,1)
    showItem()
}
