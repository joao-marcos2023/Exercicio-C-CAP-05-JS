const prompt = require("prompt-sync")();

const number = prompt("Número: ");
console.log(`Divisores de ${number}: `)

let divisorNumbers = [1];
let sum = 0;

for(let i = 2; i <= number / 2; i++){
    
    if(number % i == 0){
        divisorNumbers.push(i)
        console.log(i)
    }

};

divisorNumbers.forEach(num => sum += num)
console.log(`Soma dos divisores: ${sum}`)

const perfectNumber = sum == number? "É perfeito" :  "Não é perfeito"
console.log(perfectNumber)