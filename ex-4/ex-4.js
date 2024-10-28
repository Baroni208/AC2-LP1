const nomeCompleto = prompt("Digite seu nome completo:");

let quantidadeLetras = 0;

nomeCompleto.split("").forEach((caractere) => {
  if (caractere !== " ") {
    quantidadeLetras++;
  }
});

console.log(`Seu nome completo possui ${quantidadeLetras} letras.`);