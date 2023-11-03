// alert("FUNTIOCN ACTIVO");
// #############TIPO DE VARIABLES
// CONST PARA VARIABLES CONSTANTES
const pi= 3.1416;
const pul = 2.54;
//VAR PARA VARIABLES GLOBALES
var days = 10;
var name = "Juan Jose"; 
// LET PARA VARIABLES DE BLOQUES O LOCALES
let count = 1; //no se puede modificar o cambiar, ya esta definido

// #############FORMAS DE IMPRESION
//alert
//alert(name);
//console.log
console.log(name);
//body - pantalla
document.write(name + "---Juan Jose");
document.getElementById("box-one").innerHTML = "<h1>Juan José</h1>";
document.getElementById("box-two").innerText = "<h1>Juan José</h1>";

//librerias
// Swal.fire(
    // 'The Internet?',
    // 'That thing is still around?',
    // 'question'
// )

// Swal.fire({
//     icon: 'error',
//     showConfirmButton: false,
//     title: name,
//     text: name,
//     footer: "footer: " + name,
//     background: 'green',
//     position: 'top-start'
// });

// TIPOS DE DATOS NUMERICOS
var number_one = 20;
var number_two = 5.5
// TEXTO
var class_type = "Electiva Tecnica 1";
//BOOLEANOS
var boolean = true //false
//array -vectores
var array_num = [1,2,3,45,3.4,1.2];
var array_text = ["lunes","martes","miercoles","jueves","viernes","sabados","domingos"];
var array_mix = [1,"a","c"];
var array_mul = [
{name: "juan", last_name:"Lozano", age:"31"},
{name: "juan", last_name:"Lozano", age:"31"},
{name: "juan", last_name:"Lozano", age:"31"},
 {name: "juan", last_name:"Lozano", age:"31"}, 
]

// ----------------OPERADORES BASICOS
//suma
var suma = number_one + number_two;
console.log("suma = "+suma);
//resta
var resta = number_one - number_two;
console.log("resta = "+resta);
// multiplicacion
var mult = number_one * number_two;
console.log("multiplicacion = "+mult);
// division
var divi = number_one / number_two;
console.log("division = "+divi.toFixed(2));
// modulo
var modulo = number_one % number_two;
console.log("modulo = "+modulo);

//ANDA && con if - Ampersand
var bool = true;
var numeric = 10;
if(!bool && numeric === "10"){ //bool = true
    console.log("ENTRA IF");
}
else{
    console.log("ENTRA ELSE");
}
if(bool || numeric == 7 ){
    console.log("ENTRA IF");
    numeric++;
}else{
    console.log("ENTRA ELSE");
    numeric--;
}
console.log(numeric);
//for 

for(let j = 0; j<array_text.length; j++){
    console.log(array_text[j] + (j+1));
}
//WHILE
let f=0;
while(f<array_text.length){
    console.log(array_text[f] + (f+1));
    f++;
}

//DO WHILE
let m=0;
do{
    console.log(array_text[m] + (m+1));
    m++
}while(m<array_text.length);

//FUNCIONES Y EVENTOS
function load_page(){
    alert("LA PAGINA SE HA CARGADO CORRECTAMENTE");
}

function change_color(){
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#fff";
}

const btn_limpiar = document.querySelector("#clear_color");
clear_color-addEventListener("click", () =>{
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
})

// REGISTRO FORMULARIO
const form_register = document.getElementById("form_register");
const nombres       = document.getElementById("nombres");
const apellidos     = document.getElementById("apellidos");
const information   = document.getElementById("information");

form_register.addEventListener("submit", name_event =>{
    name_event.preventDefault();
    let info = "";
    //console.log(nombres);
    if(nombres.ariaValueMax.length <= 2 || apellidos.ariaValueMax.lengt <=2){
        info+="NOMBRES Y/O APELLIDOS INVALIDOS";
        information.style.colo = "red";
    }
    else{
        alert(nombres.value + " " + apellidos.value);
    }
    information.innerText = info;
})
//value almacena lo que ingreso en el input