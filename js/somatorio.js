//Somatório: Soma de um conjunto de números

var n = prompt("Digite a quantidade de valores");
var soma = 0;

for (var i = 0; i < n; i++) {
  var A = parseInt(prompt("Digite o valor"));
  soma += A;
}

console.log("Soma = " + parseInt(soma));
