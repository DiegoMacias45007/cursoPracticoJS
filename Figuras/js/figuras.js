let x;
let result;
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
    if (x < 0 || isNaN(x)){
        alert("¡Introduce un número válido!")
        return;
    }
    else{
        result = x * 4;
        sr.innerHTML = "El perímetro de tu cuadrado es: " + result + " cm";
        return;
    }
}

function squareArea(){
    x = document.getElementById("square-input");
    x = parseInt(x.value);
    if (x < 0 || isNaN(x)){
        alert("¡Introduce un número válido!")
        return;
    }
    else{
        result = x ** 2;
        sr.innerHTML = "El área de tu cuadrado es: " + result + " cm^2";
        return;
    }
}

//Código del Triángulo

function trianglePerimeter(){
    x = document.getElementById("triangle-input1");
    x = parseInt(x.value);
    let y = document.getElementById("triangle-input3");
    y = parseInt(y.value);
    let z =  document.getElementById("triangle-input4");
    z = parseInt(z.value)
    if(x < 0 || y < 0 || z < 0 || isNaN(x) || isNaN(y) || isNaN(z)){
        alert("¡Escribe un número válido!")
        return;
    }
    else{
        result = x + y + z;
        tr.innerHTML = "El perímetro de tu triángulo es: " + result + " cm";
        return;
    }
}

function triangleArea(){
    x = document.getElementById("triangle-input1");
    x = parseInt(x.value);
    let y = document.getElementById("triangle-input2");
    y = parseInt(y.value);
    if(x < 0 || y < 0 || isNaN(x) || isNaN(y)){
        alert("¡Escribe un número válido!")
        return;
    }
    else{
        result = (x * y) / 2;
        tr.innerHTML = "El área de tu triángulo es: " + result + " cm^2";
        return;
    }
}

function triangleHeight(){
    x = document.getElementById("triangle-input1");
    x = x.value;
    let y = document.getElementById("triangle-input3");
    y = y.value;
    z = document.getElementById("triangle-input4");
    z = z.value;
    if (y === z && x != y){
        let result = Math.sqrt( ( (x / 2) ** 2 + y ** 2 ) );
        tr.innerHTML = "La altura de tu triángulo isósceles es: " + result + " cm";
        return;
    }
    else{
        alert("¡Tu triángulo no es isósceles!");
        return
    }
}

//Código del Círculo

function circlePerimeter(){
    x = document.getElementById("circle-input");
    x = x.value;
    if(x < 0 || isNaN(x)){
        alert("¡Escribe un número válido!");
        return;
    }
    else{
        result = (x * 2) * PI;
        cr.innerHTML = "La circunferencia de tu círculo es: " + result.toFixed(4) + " cm";
        return;
    }
}

function circleArea(){
    x = document.getElementById("circle-input");
    x = x.value;
    if(x < 0 || isNaN(x)){
        alert("¡Escribe un número válido!");
        return;
    }
    else{
        result = (x ** 2) * PI;
        cr.innerHTML = "El área de tu círculo es: " + result.toFixed(4) + " cm^2";
    }
}