const imagenInicial = document.querySelector("#imagen-bienvenida");
const titulo1 = document.querySelector("#titulo-principal");
const titulo2 = document.querySelector("#titulo-secundario");
const usuarioIngresado = document.querySelector("#usuario");
const contraseniaRegistrada = document.querySelector("#clave-secreta");
const edadRegistrada = document.querySelector("#cantidad-años");
const emailRegistrado = document.querySelector("#texto-email");
const dniRegistrado = document.querySelector("#numeros-dni");
const cuerpoDePagina = document.querySelector("body");

const EDAD_MAYOR = 18;
const CLAVE = "charlie13";
const IMAGEN_1 = "https://th.bing.com/th/id/OIP.SOFetVpPdkLfodcMl3xmwAHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
const IMAGEN_2 = "https://th.bing.com/th/id/OIP.2R5R4464DL0arsHX8tBIHgHaEj?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
const IMAGEN_3 = "https://pueblospatrimoniodecolombia.travel/wp-content/uploads/2020/04/mayores-de-18-pasaporte-300x300.jpg"
const IMAGEN_4 = "https://th.bing.com/th/id/OIP.fMJyljvSq87UUDBWnIzVagHaGL?w=202&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"

const compraEntradas = document.querySelector("#compra-exitosa");
const respuesta1 = document.querySelector("#dato-1");
const respuesta2 = document.querySelector("#dato-2");
const respuesta3 = document.querySelector("#dato-3");
const respuesta4 = document.querySelector("#dato-4");
const respuesta5 = document.querySelector("#dato-5");

cuerpoDePagina.style.background = "0d1117";
cuerpoDePagina.style.color = "e6edf3";
imagenInicial.src = IMAGEN_1;

function datosIngresados() {
    let usuarioRegistrado = usuarioIngresado.value;
    let contraseniaIngresada = contraseniaRegistrada.value;
    let edadIngresada = edadRegistrada.value;
    let emailIngresado = emailRegistrado.value;
    let dniIngresado = dniRegistrado.value;

    if ((contraseniaIngresada == CLAVE) && (edadIngresada >= EDAD_MAYOR)) {

        imagenInicial.src = IMAGEN_2;
        compraEntradas.innerHTML = ("Compra exitosa : monto total de $1250");
        compraEntradas.style.color = "green";
        compraEntradas.style.fontFamily = "monospace";
        respuesta1.innerHTML = ("Bienvenido : " + usuarioRegistrado);
        respuesta1.style.color = "green";
        respuesta1.style.fontFamily = "monospace";
        respuesta3.innerHTML = ("Su edad es correcta para la pelicula :" + edadIngresada + " años");
        respuesta3.style.color = "green";
        respuesta3.style.fontFamily = "monospace";
        respuesta4.innerHTML = ("Su email es : " + emailIngresado);
        respuesta4.style.color = "green";
        respuesta4.style.fontFamily = "monospace";
        respuesta5.innerHTML = ("Su dni es : " + dniIngresado);
        respuesta5.style.color = "green";
        respuesta5.style.fontFamily = "monospace";
}
    else if (edadIngresada < EDAD_MAYOR) {
        imagenInicial.src = IMAGEN_3;
        respuesta3.innerHTML = ("Lo sentimos es menor de edad para la pelicula ")
        respuesta3.style.color = "red";
        respuesta3.style.fontFamily = "monospace";
    }

    else {
        imagenInicial.src = IMAGEN_4;
        respuesta2.innerHTML = ("Contraseña incorrecta : intente nuevamente");
        respuesta2.style.color = "red";
        respuesta2.style.fontFamily = "monospace";

    }

}