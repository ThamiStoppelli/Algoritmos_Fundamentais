//Máximo divisor comum: O máximo divisor comum (mdc) de dois inteiros a, b é o maior número inteiro que divide a e b.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro valor: ", function (a) {
  rl.question("Digite o segundo valor: ", function (b) {
    for (let i = a; i > 0; i--) {
      if (a % i == 0 && b % i == 0) {
        console.log(`o maior divisor comum entre ${a} e ${b} é ${i}`);
        break;
      }
    }

    rl.close();
  });
});

rl.on("close", function () {
  process.exit(0);
});
