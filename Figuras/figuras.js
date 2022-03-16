//Código del Cuadrado

console.group("Cuadrado");

let ladoCuadrado = 5;
console.log("Los lados del cuadrado son: " + ladoCuadrado + "cm");

const perimetroCuadrado = (lado) => lado * 4

console.log("El perímetro del cuadrado es: " + perimetroCuadrado(ladoCuadrado) + "cm");

const areaCuadrado = (lado) => lado ** 2;

console.log("El área del cuadrado es: " + areaCuadrado(ladoCuadrado) + "cm^2");

console.groupEnd(); 
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

const PI = Math.PI;

console.log("Pi es: " + PI);

const perimetroCirculo = (diametro) => diametro * PI;

console.log("La circunferencia del círculo es de: " + perimetroCirculo(diametroCirculo).toFixed(4) + " cm");

const areaCirculo = (radio) => PI * (radio ** 2);

console.log("El área del círculo es: " + areaCirculo(radioCirculo).toFixed(4) + " cm^2");


console.groupEnd();