let x;
const PI = Math.PI;

// Agregando los botones a JS y sus Event Listeners, además del <p> para mostrar el resultado
let sp = document.getElementById("square-perimeter");
sp.addEventListener("click", squarePerimeter);

let sa = document.getElementById("square-area");
sa.addEventListener("click", squareArea);

const sr = document.getElementById("square-result");

let tp = document.getElementById("triangle-perimeter");
tp.addEventListener("click", trianglePerimeter);

let ta = document.getElementById("triangle-area");
ta.addEventListener("click", triangleArea);

const tr = document.getElementById("triangle-result");

let cp = document.getElementById("circle-perimeter");
cp.addEventListener("click", circlePerimeter);

let ca = document.getElementById("circle-area");
ca.addEventListener("click", circleArea);

const cr = document.getElementById("circle-result");

//Código del Cuadrado

function squarePerimeter(){
    x = document.getElementById("square-input");
    x = parseInt(x.value);
    const result = x * 4;
    sr.innerHTML = "El perímetro de tu cuadrado es: " + result + " cm";
    return;
}

function squareArea(){
    x = document.getElementById("square-input");
    x = parseInt(x.value);
    const result = x ** 2;
    sr.innerHTML = "El área de tu cuadrado es: " + result + " cm^2";
    return;
}

//Código del Triángulo

function trianglePerimeter(){

}

function triangleArea(){

}

//Código del Círculo

function circlePerimeter(){

}

function circleArea(){

}