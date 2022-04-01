//Ordenação: Ordenar um array usando o método Quicksort

//Ordenação: Ordenar um array usando o método Quicksort

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var auxiliar = array[0];

  var ordenadoEsquerda = [];
  var desordenadoDireita = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < auxiliar) {
      ordenadoEsquerda.push(array[i]);
    } else {
      desordenadoDireita.push(array[i]);
    }
  }

  return quicksort(ordenadoEsquerda).concat(
    auxiliar,
    quicksort(desordenadoDireita)
  );
}

var desordenado = [23, 45, 16, 37, 304, 99, 22, 5];
var ordenado = quicksort(desordenado);

console.log("Array ordenado: ", ordenado);
