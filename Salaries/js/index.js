//Declaración de variables universales y clases

class countries{
    constructor(n){
        this.name = n;
        this.data = [];
    }
}
const nameInput = document.getElementById("nameInput");
const salaryInput = document.getElementById("salaryInput");
const countryInput = document.getElementById("countryInput");
const meanResult = document.getElementById("meanResult");
const medianResult = document.getElementById("medianResult");
const modeResult = document.getElementById("modeResult");
const top10Result = document.getElementById("top10Result");

let x;
let y;
let salaries; 
let country;
let result;

//Función para crear el nuevo país como un objeto

const addCountry = function(){
    country = new countries (countryInput.value);
    x = document.getElementById("formContainer");
    x.style.display = "flex";
}

//Función para agregar la persona con su salario al array de data

const addToCountry = function(){
    country.data.push({
        name: nameInput.value,
        salary: parseInt(salaryInput.value)
    });
    nameInput.value = null;
    salaryInput.value = null;
    salaries = country.data.map((people) => people.salary);
}