//Fibonacci: onde N > 1. Os primeiros termos são: 0, 1, 1, 2, 3, 5, 8, 13 …. Cada termo, além dos dois primeiros, é derivado da soma de seus dois antecessores mais próximos.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Informe a quantidade de termos da sequencia de Fibonacci que deseja visualizar: ",
  function (n) {
    var a = 0;
    var b = 1;
    var i = 2;
    var c;
    if (n == 1) {
      console.log(a);
    } else {
      console.log(a);
      console.log(b);
    }

    while (n > i) {
      i = i + 1;
      c = a + b;
      console.log(c);
      a = b;
      b = c;
    }
    rl.close();
  }
);

rl.on("close", function () {
  process.exit(0);
});
