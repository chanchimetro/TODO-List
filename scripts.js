let itemList = [];
let idUnico = 0;

function agregarItem() {
    const i = {
        id: idUnico,
        titulo: document.getElementById('task').value,
        hecho: false,
        fechaCreacion: Date.now(),
        fechaHecho: null
    }
    idUnico++;
    itemList.push(i);
    mostrarLista();
}

function mostrarLista() {
    document.getElementById('lista').innerHTML = "";
    for (let index = 0; index < itemList.length; index++) {
        document.getElementById('lista').innerHTML += `<label class="list-group-item p-1 mx-auto w-50" style="padding:0%; margin-bottom:50%:" id="${itemList[index].id}">
        <div class="cont"><input type="checkbox" class="form-check-input mt-0 mx-2" id="${itemList[index].id}cb" onclick="tacharItem(${itemList[index].id})"></input>
        <span id="${itemList[index].id}sp">${itemList[index].titulo}</span></div>
        <button id="${itemList[index].id}btn" class="btn btn-danger" onclick="borrarItem(${itemList[index].id})">X</button>
        </label>`;
        if (itemList[index].hecho) {
            itemList[index].fechaHecho = Date.now();
            document.getElementById(`${itemList[index].id}sp`).style.textDecoration = "line-through";
            document.getElementById(`${itemList[index].id}sp`).setAttribute("class", "text-muted");
            document.getElementById(`${itemList[index].id}cb`).checked = true;
            document.getElementById(`${itemList[index].id}cb`).disabled = true;
        }
    }
}

function tacharItem(id) {
    const index = itemList.findIndex((item) => item.id == id);
    itemList[index].hecho = true;
    mostrarLista();
}

function borrarItem(id) {
    const index = itemList.findIndex((item) => item.id == id);
    itemList.splice(index, 1);
    mostrarLista();
}