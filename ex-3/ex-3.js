    let numeros = [1.2, 3.7, 4.5, 6.1, 8.9];

let numerosArredondados = [];

numeros.forEach(function(num) {
   
    let numArredondado = Math.ceil(num);
    
    numerosArredondados.push(numArredondado);
});
console.log(numerosArredondados);