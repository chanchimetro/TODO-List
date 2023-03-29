let itemList = [];
let idUnico = 0;

function agregarItem()
{
    var i = {
        id: idUnico,
        titulo: document.getElementById('task').value,
        hecho: false,
        fechaCreacion: Date.now()
    }
    idUnico++;
    itemList.push(i);
    mostrarLista();
}

function mostrarLista()
{
    document.getElementById('lista').innerHTML = "";
    for (let index = 0; index < itemList.length; index++) {
        document.getElementById('lista').innerHTML += `<li id="${itemList[index].id}">${itemList[index].titulo} <button onclick = "borrarItem(${itemList[index].id})">X</button> <button onclick = "tacharItem(${itemList[index].id})">✓</button></li>`;
        if (itemList[index].hecho) {
            document.getElementById(`${itemList[index].id}`).style.textDecoration = "line-through";
        }
    }
}

function tacharItem(id) {
    let index = itemList.findIndex((item) => item.id == id);
    itemList[index].hecho = true;
    mostrarLista();
}