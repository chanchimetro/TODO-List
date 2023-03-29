let itemList = [];
let idUnico = 0;

function agregarItem()
{
    var i = {
        id: idUnico,
        titulo: document.getElementById('task').value,
        hecho: false,
        fecha: Date.now()
    }
    idUnico++;
    itemList.push(i);
    mostrarLista();
}

function mostrarLista()
{
    document.getElementById('lista').innerHTML = "";
    for (let index = 0; index < itemList.length; index++) {
        document.getElementById('lista').innerHTML += `<li id="${itemList[index].id}">${itemList[index].titulo} <button onclick = "borrarItem"></button></li>`;
    }
}