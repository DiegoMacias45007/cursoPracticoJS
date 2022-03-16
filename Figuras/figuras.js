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

squarePerimeter(){
    x = getElementById("square-input");
    const result = x * 4;
}

//Código del Triángulo

console.group("Triángulo");

let ladoTriangulo1 = 6;
let ladoTriangulo2 = 6;
let ladoTriangulo3 = 4;
const baseTriangulo = ladoTriangulo3;

console.log(
    "Los lados del triángulo son: " 
    + ladoTriangulo1 
    + " cm, " 
    + ladoTriangulo2 
    + " cm y " 
    + ladoTriangulo3 
    + " cm."
    );

let alturaTriangulo = 5.5;

console.log("La altura del triángulo es: " + alturaTriangulo + " cm");

const perimetroTriangulo = (lado1, lado2, lado3) => lado1 + lado2 + lado3;
    
console.log("El perímetro del triángulo es: " + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTriangulo3) + " cm");

const areaTriangulo = (base, altura) => (base * altura) / 2;

console.log("El área del triángulo es: " + areaTriangulo(baseTriangulo, alturaTriangulo).toFixed(4) + " cm^2")

console.groupEnd();

//Código del Círculo

console.group("Círculo");

let radioCirculo = 4;

console.log("El radio del círculo es: " + radioCirculo + " cm");

let diametroCirculo = radioCirculo * 2;

console.log("El diámetro del círculo es: " + diametroCirculo + " cm");


console.log("Pi es: " + PI);

const perimetroCirculo = (diametro) => diametro * PI;

console.log("La circunferencia del círculo es de: " + perimetroCirculo(diametroCirculo).toFixed(4) + " cm");

const areaCirculo = (radio) => PI * (radio ** 2);

console.log("El área del círculo es: " + areaCirculo(radioCirculo).toFixed(4) + " cm^2");


console.groupEnd();