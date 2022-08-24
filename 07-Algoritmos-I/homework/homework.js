'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array =[1];
let divisor = 2
  while(num !== 1){
    if ( num % divisor === 0){
      array.push(divisor);
     num = num / divisor;
    }else { divisor++}

  }
  return array
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
   var sorted = false
  while (!sorted){
    sorted = true;
    array.forEach(function (element, index, array){
      if (element > array[index+1]) {
        array[index] = array[index+1];
        array[index+1] = element;
        sorted = false;
      }
    });
  }

return array ;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for ( let i = 1 ; i < array.length ; i++){
        let s = i -1;
        let arrayAuxiliar = array [i];
        while (s >= 0 && array[s] > arrayAuxiliar){
          array[s+1] = array[s];
          s-- ;
        }
     array[s+1]= arrayAuxiliar
    }
 return  array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0 ; i < array.length; i++){
    let min = i ;
    for (let s = i + 1; s < array.length; s++) {
      if(array[s] < array [min]){
        min = s;
      }
    }
    let auxiliar = array[i];
    array[i] = array[min];
    array[min] = auxiliar ;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
