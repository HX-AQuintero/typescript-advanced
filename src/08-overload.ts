/*
Consideremos una function que realice lo siguiente:

'Ale' => ['A','l','e'], esto es, string => string[]

['A','l','e'] => 'Ale', esto es, string[] => string
*/

//veremos la sobrecarga de funciones para no arrow functions:
function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)){
    return input.join('');
  } else {
    return input.split('');
  }
}

//ejecutamos:
const array = parseStr('Alejo');
console.log(array); // [ 'A', 'l', 'e', 'j', 'o' ]

const stringy = parseStr(['A', 'l', 'e', 'j', 'o']);
console.log(stringy); // Alejo

/*
Ajá, ¿y el problema?

Como TS no sabe si es string o string[], no me proporciona adecuadamente los métodos para array y stringy

*/

// array.reverse(); //rompe porque no se sabe si es string[]
// array.split(); //rompe porque no se sabe si es string

//verificamos:

if(typeof stringy === 'string'){
  stringy.toUpperCase() //ahora sí puedo usar métodos de string
}

if(Array.isArray(array)){
  array.reverse() //ahora sí puedo usar métodos de array
}

//¿Cómo solucionamos esto?