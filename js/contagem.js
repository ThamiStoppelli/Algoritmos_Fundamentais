var n = prompt("Informe a quantidade de notas: ");
var nota;
var contagem = 0;
var i = 0;

while (i < n) {
  nota = prompt("Nota do aluno: ");

  if (nota >= 50) {
    contagem = contagem + 1;
  }
  i++;
}

console.log("Número de aprovações: " + contagem);
