const prices: (number | string)[] = [1,2,4,'hola',6]; //tipado de arrays básico. No importa orden ni tamaño.

let user: [string, number] = ['alejo123', 36]; //tipado fuerte. Importa el orden y tamaño del arreglo.
user = ['12', 123];
user = ['hola', 123];

// user = [];
// user = ['hola', 45, 98];
// user = ['hola', 45, 'chao'];

let data: [string, boolean, number?] = ['hola', false, 34];

// data = ['buenas', true]
// data = ['buenas', true, 56, 'hola']
// data = ['buenas', true, 78, false]
// data = [12, 'hola', false]

data = ['chao', true, 12]; //opcional el valor tipo number

//el tamaño del arreglo puede afectarse al pushear un valor con algún tipo definido para la tupla:
data.push(34);
data.push(false);
// data.push([1,2,3]); //rompe porque no está este tipo definido en la línea 11
console.log(data);

// data = data.filter(item => typeof item === 'number')
// console.log(data);

const [username, age] = user;
console.log(username);
console.log(age);

//número indefinido de valores de un mismo tipo:
const args: [boolean, ...number[], string] = [true, 2, 3, 4, 5, 6, "seven"]
console.log(args)

//[ true, 2, 3, 4, 5, 6, "seven"]

// const [state, setState] = useState(initialState); //tupla de React! retorna un arreglo con orden específico y longitud 2 siempre.
//el primer índice es reservado para el estado actual y el segundo, para la función que setea el estado actual
