//Declaración de variables universales

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

//Función para agregar números del usuario al array

function addNumberToArray(){
    x = parseInt(itemArray.value);
    if(isNaN(x)){
        alert("¡Escribe un número válido!")
        return;
    }else{
        list.push(x);
        itemArray.value = null; 
        return;
    }
}

//Media

function mean(){
    for (let i of list){
        sum += i;
        total ++;
    }
    result = sum / total;
    meanResult.style.display = "block";
    meanResult.innerHTML = "El promedio de tu lista de número es: " + result;
    return;
}

//Mediana

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
    medianResult.style.display = "block"
    medianResult.innerHTML = "La mediana de tu lista es: " + result;
    return;
}

//Moda

function mode(){
    const listCount = {};
    list.map(
        function(element){
            if (listCount[element]){
                listCount[element] += 1;
            }else{
                listCount[element] = 1;
            }
        }
    )
    const array = Object.entries(listCount).sort((a , b) => a[1] - b[1]);
    result = array[array.length - 1];
    modeResult.style.display = "block";
    modeResult.innerHTML = "La moda de tu lista es: " + result[0] + " que apareció " + result[1] + " veces";
    return;
}
