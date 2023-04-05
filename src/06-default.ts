//default parameters
export const createProduct = (
  id: string | number,
  isNew: boolean = true, // en caso de no recibir el valor, asume true
  stock: number = 100   // en caso de no recibir un valor, asume 100
) => {
  return {
    id,
    stock,
    isNew
  }
}

let obj1 = createProduct(1, false, 12);
console.log(obj1); // { id: 1, stock: 12, isNew: false }

let obj2 = createProduct(1);
console.log(obj2); // { id: 1, stock: 100, isNew: true }