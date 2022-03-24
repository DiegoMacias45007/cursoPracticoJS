const itemArray = document.getElementById("itemArray");
const list = [];
const meanResult = document.getElementById("meanResult");
const medianResult = document.getElementById("medianResult");
const modeResult = document.getElementById("modeResult");
const compareNumbers = (a, b) => a - b;

let x;
let y;
let sum = 0;
let total= 0;
let result;

function addNumberToArray(){
    x = parseInt(itemArray.value);
    list.push(x);
    itemArray.value = null; 
    return;
}

function mean(){
    for (let i of list){
        sum += i;
        total ++;
    }
    result = sum / total;
    meanResult.innerHTML = "El promedio de tu lista de número es: " + result;
    return;
}

function median(){
    list.sort(compareNumbers);
    const halfLength = parseInt(list.length / 2);
    if(list.length % 2 === 0) {
        x = list[halfLength];
        y = list[halfLength - 1]; 
        result = (x + y) / 2;   

    } else {
        result = list[halfLength];
    }
    medianResult.innerHTML = "La mediana de tu lista es: " + result;
    return;
}

function mode(){
    
}