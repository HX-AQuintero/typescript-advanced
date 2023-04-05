//Sobrecarga de funciones:
// export function parseStr(input: string): string[];
// export function parseStr(input: string[]): string;

// export function parseStr(input: string | string[]): string | string[] {
//   if(Array.isArray(input)){
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }

//ejecutamos:
const array = parseStr('Alejo');
console.log(array); // [ 'A', 'l', 'e', 'j', 'o' ]

const stringy = parseStr(['A', 'l', 'e', 'j', 'o']);
console.log(stringy); // Alejo

stringy.toUpperCase() //ahora sí puedo usar métodos de string
array.reverse() //ahora sí puedo usar métodos de array

//Refactorizando:
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

export function parseStr(input: unknown): unknown {
  if(Array.isArray(input)){
    return input.join('');
  } else if(typeof input === 'string'){
    return input.split('');
  }
}