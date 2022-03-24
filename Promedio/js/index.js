// Promedio
const itemArray = document.getElementById("itemArray");
const meanList = [];
const medianList = [];
const modeList = [];
const meanResult = document.getElementById("meanResult");
const medianResult = document.getElementById("medianResult");
const modeResult = document.getElementById("modeResult");

let x;
let sum = 0;
let total= 0;
let result;

function mean(){
    for (let i of meanList){
        sum += i;
        total ++;
    }
    result = sum / total;
    meanResult.innerHTML = "El promedio de tu lista de número es: " + result;
    return;
}

function addNumberToArray(){
    x = parseInt(itemArray.value);
    meanList.push(x);
    itemArray.value = null; 
    console.log(meanList);
    return;
}