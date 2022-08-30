'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var randomPlace = Math.floor(Math.random() * array.length);
       var pivotValue = array[randomPlace];
       var  left = [];
       var  pivot = [];
       var right = [];
        

    for (var i = 0; i < array.length; i++) {
        if (array[i] === pivotValue) {
            pivot.push(array[i]);
            continue;
        }
        (array[i] < pivotValue ? left : right).push(array[i]);
    }

    if (left.length <= 1 && right.length <= 1) {
        return left.concat(pivot, right);
    }
    if (left.length <= 1) {
        return left.concat(pivot, quickSort(right));
    }
    if (right.length <= 1) {
        return quickSort(left).concat(pivot, right);
    }
    return quickSort(left).concat(pivot, quickSort(right));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if( array.length === 1) return array;

  var mid = Math.floor(array.length / 2) ;
  var left = array.slice(0, mid) ;
  var right = array.slice(mid) ;

 return merge(mergeSort(left), mergeSort(right))
}


function merge(left, right) {

  var leftI = 0;
  var rightI = 0;
  var container = [];

  while( leftI < left.length && rightI < right.length){
    if(left[leftI] < right[rightI]){
      container.push(left[leftI]);
      leftI++;
    }else{
       container.push(right[rightI]) ;
       rightI++;
     }
  }
  return container.concat(left.slice(leftI)).concat(right.slice(rightI));
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
