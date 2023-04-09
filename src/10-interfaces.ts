// Anteriormente, usábamos los template literals de esta manera:
type Sizes = 'S' | 'M' | 'L' | 'XL';

type Product = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number,
  size: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
  size: 'S'
});

// Con interfaces, sería:
type Sizes2 = 'S' | 'M' | 'L' | 'XL';


interface Product2  {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number,
  size: Sizes2;
}

const products2: Product2[] = [];

products2.push({
  id: 1,
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
  size: 'S'
});

// Ajá, ¿entonces cuál es la diferencia?
// Los types se usan para hacer cosas más puntuales
// Las interfaces para hacer cosas con atributos más generales y pueden extenderse, esto es, pueden heredar los tipos de otras interfaces. Los types no.

// Otra característica es que a las interfaces se les puede agregar campos extra luego de ser creadas.