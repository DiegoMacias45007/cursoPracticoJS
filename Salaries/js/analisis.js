//Función global para acomodar de menor a mayor

const sortSalaries = (a, b) =>
    a - b;

//Mediana General

const salaryMedian = function(){
    salaries.sort(sortSalaries);
    const halfLength = parseInt(salaries.length / 2);
    if (salaries.length % 2 === 0){
        x = salaries[halfLength - 1] ;
        y = salaries[halfLength];
        result = (x + y) / 2;
    }else{
        result = salaries[halfLength]
    }
    medianResult.innerHTML = `La mediana salarial de ${country.name} es de: ${result.toFixed(2)} pesos`;
}

//Media salarial

const salaryMean = function(){
    const listSum = salaries.reduce((sum = 0, newVal) => sum + newVal);
    result = listSum / salaries.length;
    meanResult.innerHTML = `La media salarial de ${country.name} es de: ${result.toFixed(2)} pesos`
}

//Moda Salarial

const salaryMode = function(){
    const listCount = {}
    salaries.map(
        function(element){
            if(listCount[element]){
                listCount[element] += 1;
            }else{
               listCount[element] = 1;
            }
        })
    const array = Object.entries(listCount).sort((a, b) => a[1] - b[1]);
    result = array[array.length - 1];
    modeResult.innerHTML = `La moda salarial de ${country.name} es de: ${result[0]} pesos que aparece ${result[1]} veces`;
}

//Mediana Top 10
const top10Median = function(){
    const spliceStart = (salaries.length * 90 ) / 100;
    const spliceCount = salaries.length - spliceStart;
    console.log(spliceStart, spliceCount);
    const top10 = salaries.sort(sortSalaries).splice(spliceStart, spliceCount);

    const halfLength = parseInt(top10.length / 2);
    if (top10.length % 2 === 0){
        x = top10[halfLength - 1] ;
        y = top10[halfLength];
        result = (x + y) / 2;
    }else{
        result = top10[halfLength]
    }
    top10Result.innerHTML = `La mediana salarial de los top 10 salarios de: ${country.name} es de: ${result.toFixed(2)} pesos`;
}