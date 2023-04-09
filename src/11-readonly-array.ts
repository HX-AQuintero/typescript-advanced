const numbers: ReadonlyArray<number> = [1,2,3,4];
// Para métodos que mutan el arreglo original, ReadonlyArray no los ejecutará

// numbers.push(9);  //Error!
// numbers.pop(); //Error!
// numbers.unshift(1); //Error!

// Para métodos que crean copias del array original, ReadonlyArray no tendrá problemas

// numbers.filter(() => {})
// numbers.reduce(() => 0)
// numbers.map(() => {})