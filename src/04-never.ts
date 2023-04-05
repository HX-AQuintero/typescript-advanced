// never type: Se usa para funciones en las que nunca termina su ejecución o lanzan un error en algún momento de su ejecución

const  withoutEnd = () => { //función que nunca para al ejecutarse
  while(true){
    console.log('hola');
  }
}

const fail = (message: string) => { //función que lanza un error al ejecutarse
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input === 'string') {
    return 'es un string';
  } else if(Array.isArray(input)){
    return 'es un array';
  } else fail('not match')
}

console.log(example('hola'));
console.log(example([1,2,3]));
console.log(example({})); //detiene el programa
console.log(example('hola, me ignoraste')); //no se ejecuta por el fail anterior

// funciones que nunca se detiene PERO TS infiere que es de tipo void, no never:
const badFor = () => {
  for(let i = 1; i < 10; i){
    console.log(i)
  }
}
// igualmente para esta función recursiva sin punto de corte:
const badRecursion = () => {
  if(true){
    console.log('Oh sh*t here we go again')
    badRecursion()
  }
}



