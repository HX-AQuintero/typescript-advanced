//any type
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = {};

let isNew: boolean = anyVar; //como es cualquier valor, podría ser también boolean jummm!!! wtf!?

//permite usar métodos de cualquier tipo de dato sin asegurarse de qué realmente tiene anyVar
anyVar.toUpperCase(); // y si no es tipo string?
anyVar.toFixed(); // y si no es tipo number?

//uknown type
let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 4;
unknownVar = [];
unknownVar = 'hola';

// unknownVar.toFixed(); //rompe porque debo asegurarme realmente que es de tipo number
// unknownVar.toUpperCase(); //rompe porque debo asegurarme realmente que es de tipo string

//verificando:
if(typeof unknownVar === 'string'){
  unknownVar.toUpperCase();           //ahora sí es posible aplicar un método de string
}

//cuando no sabemos qué me devolverá una función, podemos usar también el unknown type:
const parse = (str: string): unknown => {
  return JSON.parse(str);
}

//no puede forzarse a que sea un tipo concreto:
// let isNew2: boolean = unknownVar; //rompe porque no sabemos si es boolean

//verificando:
if(typeof unknownVar === 'boolean'){
  let isNew2: boolean = unknownVar
}
