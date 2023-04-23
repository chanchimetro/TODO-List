let itemList = [];
let idUnico = 0;
let menorDuracion = 999999999999999;
let tareaMasRapida = 'No completaste ninguna tarea.';

function agregarItem() {
    const input = document.getElementById('task').value;
    if (input) {
        const i = {
            id: idUnico,
            titulo: document.getElementById('task').value,
            hecho: false,
            fechaCreacion: Date.now(),
            fechaHecho: null
        }
        idUnico++;
        itemList.push(i);
        item = crearItem(i);
        document.getElementById('lista').appendChild(item);
        actualizarLista();
    } else {
        alert("Ingrese una tarea válida.");
    }
}

function crearItem(i){
    const item = document.createElement("label");
    item.setAttribute("class", "list-group-item p-1 mx-auto w-50");
    item.setAttribute("style", "padding:0%; margin-bottom:0%;");
    item.setAttribute("id", `${i.id}`);
    item.innerHTML = `<div class="cont"><input type="checkbox" class="form-check-input mt-0 mx-2" id="${i.id}cb" onclick="tacharItem(${i.id})"></input>
    <span id="${i.id}sp">${i.titulo}</span></div>
    <button id="${i.id}btn" class="btn btn-danger" onclick="borrarItem(${i.id})">X</button>`;
    return item;
}

function actualizarLista() {
    for (let index = 0; index < itemList.length; index++) {
        if (itemList[index].hecho) {
            document.getElementById(`${itemList[index].id}sp`).style.textDecoration = "line-through";
            document.getElementById(`${itemList[index].id}sp`).setAttribute("class", "text-muted");
            document.getElementById(`${itemList[index].id}cb`).checked = true;
            document.getElementById(`${itemList[index].id}cb`).disabled = true;
        }
    }
}

function tacharItem(id) {
    const index = itemList.findIndex((item) => item.id == id);
    itemList[index].fechaHecho = Date.now();
    itemList[index].hecho = true;
    if((itemList[index].fechaHecho - itemList[index].fechaCreacion) < menorDuracion) {
        menorDuracion = (itemList[index].fechaHecho - itemList[index].fechaCreacion);
        tareaMasRapida = itemList[index].titulo;
    }
    actualizarLista();
}

function mostrarTareaMasRapida(){
    document.getElementById("tareaMasRapida").innerHTML = tareaMasRapida;
}

function borrarItem(id) {
    const index = itemList.findIndex((item) => item.id == id);
    itemList.splice(index, 1);
    document.getElementById('lista').removeChild(document.getElementById(id));
}