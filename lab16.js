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

