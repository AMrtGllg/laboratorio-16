//ej3 y ej4
const parrafo = document.getElementById("parrafo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", function () {
     if (parrafo.textContent === "Texto original") {
        parrafo.textContent = "Texto cambiado";
    } else {
        parrafo.textContent = "Texto original";
    }
});

//ej5
const btnOscuro = document.getElementById("btnOscuro");

btnOscuro.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");
});


//ej6
let contador = 0;
const spanValor = document.getElementById("valor");
const btnMas = document.getElementById("btnMas");
const btnMenos = document.getElementById("btnMenos");
const mensaje = document.getElementById("mensaje");

function actualizarVista() {
    spanValor.textContent = String(contador);
}

btnMas.addEventListener("click", function () {
    contador++;
    mensaje.textContent = "";
    actualizarVista();
});

btnMenos.addEventListener("click", function () {
    if (contador > 0) {
        contador--;
        mensaje.textContent = "";
    } else {
        mensaje.textContent = "El contador no puede ser menor que 0";
    }
    actualizarVista();
});


//ej7
const inputItem = document.getElementById("textoItem");
const btnAgregar = document.getElementById("btnAgregar");
const btnBorrarUltimo = document.getElementById("btnBorrarUltimo");
const listaTareas = document.getElementById("listaTareas");

btnAgregar.addEventListener("click", function () {
    const texto = inputItem.value.trim();
    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;
        listaTareas.appendChild(li);
        inputItem.value = "";
    }
});

btnBorrarUltimo.addEventListener("click", function () {
    const ultimo = listaTareas.lastElementChild;
    if (ultimo) {
        ultimo.remove();
    }
});


//ej8
const formContacto = document.getElementById("formContacto");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const contErrorNombre = document.getElementById("errorNombre");
const contErrorCorreo = document.getElementById("errorCorreo");

formContacto.addEventListener("submit", function (event) {
    event.preventDefault();

    contErrorNombre.innerHTML = "";
    contErrorCorreo.innerHTML = "";
    
    let valido = true;
    
    if (inputNombre.value.trim() === "") {
        const span = document.createElement("span");
        span.textContent = "El nombre es obligatorio";
        span.classList.add("error");
        contErrorNombre.appendChild(span);
        valido = false;
    }
    
    if (inputCorreo.value.trim() === "") {
        const span = document.createElement("span");
        span.textContent = "El correo es obligatorio";
        span.classList.add("error");
        contErrorCorreo.appendChild(span);
        valido = false;
    }
    
    if (valido) {
        formContacto.submit();
    }
});

//ej9
const imgPrincipal = document.getElementById("imgPrincipal");
const minis = document.querySelectorAll("#miniaturas img");

minis.forEach(function (mini) {
    mini.addEventListener("click", function () {
        imgPrincipal.src = mini.src;
        imgPrincipal.alt = mini.alt;
    });
});


//ej10
const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 }
];

const btnTabla = document.getElementById("btnTabla");
const contTabla = document.getElementById("contenedorTabla");

btnTabla.addEventListener("click", function () {
    contTabla.innerHTML = "";
    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");
    const thNombre = document.createElement("th");
    thNombre.textContent = "Nombre";
    const thPrecio = document.createElement("th");
    thPrecio.textContent = "Precio";

    trHead.appendChild(thNombre);
    trHead.appendChild(thPrecio);
    thead.appendChild(trHead);
    tabla.appendChild(thead);
    
    const tbody = document.createElement("tbody");
    
    productos.forEach(function (prod) {
        const tr = document.createElement("tr");
        const tdNombre = document.createElement("td");
        tdNombre.textContent = prod.nombre;
        const tdPrecio = document.createElement("td");
        tdPrecio.textContent = String(prod.precio);
        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        tbody.appendChild(tr);
    });
    tabla.appendChild(tbody);
    contTabla.appendChild(tabla);
});

//ej11
const ulEliminar = document.getElementById("listaEliminar"); // tu <ul> debe tener ese id

ulEliminar.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});

//ej12
const cuadrado = document.getElementById("cuadrado");
const btnMover = document.getElementById("btnMover");
const btnReiniciar = document.getElementById("btnReiniciar");

btnMover.addEventListener("click", function() {
  cuadrado.classList.add("mover");
});
btnReiniciar.addEventListener("click", function() {
  cuadrado.classList.remove("mover");
});

//ej13
const formUsuario = document.getElementById("formUsuario");
const nombreUsu = document.getElementById("nombreUsu");
const edadUsu = document.getElementById("edadUsu");
const tablaUsuarios = document.getElementById("tablaUsuarios").querySelector("tbody");

let usuarios = [];

formUsuario.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = nombreUsu.value.trim();
    const edad = edadUsu.value.trim();
    if (nombre !== "" && edad !== "") {
        usuarios.push({ nombre, edad });
        renderTabla();
        formUsuario.reset();
    }
});

function renderTabla() {
    tablaUsuarios.innerHTML = "";
    usuarios.forEach(function(u, i) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${u.nombre}</td>
        <td>${u.edad}</td>
        
        <td>
        <button data-accion="editar" data-index="${i}">Editar</button>
        <button data-accion="eliminar" data-index="${i}">Eliminar</button>
        </td>
        
        `;
        tablaUsuarios.appendChild(tr);
    });
}

tablaUsuarios.addEventListener("click", function(event) {
    const idx = event.target.dataset.index;
    if (event.target.dataset.accion === "eliminar") {
        usuarios.splice(idx, 1);
        renderTabla();
    }
    if (event.target.dataset.accion === "editar") {
        const u = usuarios[idx];
        nombreUsu.value = u.nombre;
        edadUsu.value = u.edad;
        usuarios.splice(idx, 1);
        renderTabla();
    }
});


//ej14
const persona = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Lima"
};
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);


//ej15
const cadenaJSON = '{"nombre":"Pedro","edad":34}';
const objeto = JSON.parse(cadenaJSON);
const p = document.createElement("p");
p.textContent = "Nombre: " + objeto.nombre;
document.body.appendChild(p);


//ej16
const products = [
    { nombre: "Teclado", precio: 120 },
    { nombre: "Monitor", precio: 800 }
];

const productsJSON = JSON.stringify(products);
const productsParse = JSON.parse(productsJSON);

const ul = document.createElement("ul");
productsParse.forEach(prod => {
    const li = document.createElement("li");
    li.textContent = prod.nombre;
    ul.appendChild(li);
});
document.body.appendChild(ul);


//ej17
const usuario = { nombre: "Juan", correo: "juan@mail.com", rol: "admin" };
localStorage.setItem("usuario", JSON.stringify(usuario));

const usuarioGuardado = localStorage.getItem("usuario");
if (usuarioGuardado) {
    const objUsuario = JSON.parse(usuarioGuardado);
    const p = document.createElement("p");
    p.textContent = `Nombre: ${objUsuario.nombre}, Correo: ${objUsuario.correo}, Rol: ${objUsuario.rol}`;
    document.body.appendChild(p);
}


//ej18
const librosJSON = '[{"titulo":"Cien años de soledad","autor":"García Márquez"},{"titulo":"Rayuela","autor":"Cortázar"}]';
const libros = JSON.parse(librosJSON);
const tabla = document.createElement("table");
const trHead = document.createElement("tr");

["Título","Autor"].forEach(txt => {
    const th = document.createElement("th");
    th.textContent = txt;
    trHead.appendChild(th);
});
tabla.appendChild(trHead);

libros.forEach(libro => {
    const tr = document.createElement("tr");
    const tdTitulo = document.createElement("td");
    tdTitulo.textContent = libro.titulo;
    const tdAutor = document.createElement("td");
    tdAutor.textContent = libro.autor;
    tr.appendChild(tdTitulo);
    tr.appendChild(tdAutor);
    tabla.appendChild(tr);
});
document.body.appendChild(tabla);

//ej19
let cadena = '{"nombre":"Maria","edad":23}';
let obj = JSON.parse(cadena);
obj.edad = 24;  
let nuevoJSON = JSON.stringify(obj);
console.log(nuevoJSON);

//ej20
const inpNombre = document.getElementById("inpNombre");
const btnGuardar = document.getElementById("btnGuardar");

btnGuardar.addEventListener("click", function() {
    const obj = { nombre: inpNombre.value };
    const json = JSON.stringify(obj);
    console.log(json);
});

//ej21
const tareasJSON = '[{"titulo":"Estudiar Javascript","completada":true},{"titulo":"Hacer ejercicio","completada":false}]';
const tareas = JSON.parse(tareasJSON);

const ulTareas = document.createElement("ul");
tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.textContent = tarea.titulo;
    li.style.color = tarea.completada ? "green" : "red";
    ulTareas.appendChild(li);
});
document.body.appendChild(ulTareas);


//ej22
const formPerfil = document.getElementById("formPerfil");
const perfilMostrado = document.getElementById("perfilMostrado");

const saved = localStorage.getItem("perfilUsuario");
if (saved) {
    const datos = JSON.parse(saved);
    mostrarPerfil(datos);
}

formPerfil.addEventListener("submit", function(event) {
    event.preventDefault();
    const perfil = {
        nombre: document.getElementById("perfilNombre").value,
        edad: document.getElementById("perfilEdad").value,
        pais: document.getElementById("perfilPais").value
    };
    localStorage.setItem("perfilUsuario", JSON.stringify(perfil));
    mostrarPerfil(perfil);
});

function mostrarPerfil(perfil) {
    perfilMostrado.innerHTML = `Nombre: ${perfil.nombre}<br>Edad: ${perfil.edad}<br>País: ${perfil.pais}`;
}
