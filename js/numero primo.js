//Número é primo: Um número inteiro positivo n é primo se for divisível apenas por 1 e por n.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe um numero: ", function (n) {
  var serPrimo = true;

  if (n === 1 || n === 2) {
    console.log(`${n} é um número primo`);
  } else if (n > 1) {
    for (var i = 2; i < n; i++) {
      if (n % i == 0) {
        serPrimo = false;
        break;
      }
    }

    if (serPrimo) {
      console.log(`${n} é um número primo`);
    } else {
      console.log(`${n} não é um número primo`);
    }
  } else {
    console.log(`${n} não é um número primo`);
  }

  rl.close();
});

rl.on("close", function () {
  process.exit(0);
});
