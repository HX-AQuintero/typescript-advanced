//optional parameters
export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number // los parámetros opcionales siempre deben ir al final de los requeridos
) => {
  return {
    id,
    stock,
    isNew
  }
}

let obj1 = createProduct(1, true, 12);
console.log(obj1); // { id: 1, stock: 12, isNew: true }

let obj2 = createProduct(1, true);
console.log(obj2); // { id: 1, stock: undefined, isNew: true }


// para evitar ese valor undefined para el parámetro opcional, podemos pasarle un valor que tome por defecto:
export const createProduct2 = (
  id: string | number,
  isNew?: boolean,
  stock?: number // los parámetros opcionales siempre deben ir al final de los requeridos
) => {
  return {
    id,
    stock: stock || 10,
    isNew: isNew || true
  }
}

let obj3 = createProduct2(1, true);
console.log(obj3); // { id: 1, stock: 10, isNew: true }

//PEROOOO:
let obj4 = createProduct2(1, false, 0);
console.log(obj4); // { id: 1, stock: 10, isNew: true } WTF!?

//Lo anterior sucede porque tanto 0 como false son falsy y por ende, toma el valor de lo que está a la derecha del operador ||.

//Solución: nullish coalescing
//solo busca lo que está a la derecha de ||, en casos null o undefined

export const createProduct3 = (
  id: string | number,
  isNew?: boolean,
  stock?: number // los parámetros opcionales siempre deben ir al final de los requeridos
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

let obj5 = createProduct3(1, false, 0);
console.log(obj5); // { id: 1, stock: 0, isNew: false }