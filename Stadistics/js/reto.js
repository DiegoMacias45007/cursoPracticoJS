//Promedio Aponderado

const notes = [
    {
        course: "Educación física",
        note: 10,
        credit: 2
    },
    {
        course: "Programación",
        note: 8,
        credit: 5
    },
    {
        course: "Finanzas Personales",
        note: 7,
        credit: 5
    }
];

console.log(notes);

const notesWithCredit = notes.map((noteObject) => noteObject.note * noteObject.credit);

const sumOfNotesWithCredit = notesWithCredit.reduce((sum = 0, newVal) => sum + newVal);

const credits = notes.map((noteObject) => noteObject.credit);

const sumOfCredits = credits.reduce((sum = 0, newVal) => sum + newVal);

const promedioAponderado = sumOfNotesWithCredit / sumOfCredits;

console.log(promedioAponderado);    

//Media Geométrica
const rentability = [
    20,
    15,
    33,
    25
];

function convertToPositive(){
    for (let i of rentability){
        let index = rentability.indexOf(i);
        if(i > 0){
            rentability[index] =  parseFloat("1." + i);
            console.log(i); 
        } else{
            rentability[index] = parseFloat("0."+ Math.abs(i));
        }
    }
    console.log(rentability);
    return;
}


const multiplicationOfRentabilities = rentability.reduce((mult = 1, newVal) => mult * newVal);

const root = 1 / rentability.length;

const geometricMean = Math.pow(multiplicationOfRentabilities, root);

