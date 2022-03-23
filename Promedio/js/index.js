// Promedio
const itemArray = document.getElementById("itemArray");
const list1 = [];

let x;
let sum1 = 0;
let total= 0;
let result;

function promedio(){
    for (let i of list1){
        sum1 += i;
        total ++;
    }
    result = sum1 / total;
    return result;
}

function addNumberToArray(){
    x = itemArray.value;
    list1.push(x);
    itemArray.style.value === null; 
    return;
}