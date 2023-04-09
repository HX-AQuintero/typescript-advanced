import { faker } from '@faker-js/faker';
import { addProduct, deleteProduct, getProducts, updateProduct, products } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({min: 10, max: 100}),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    categoryId: faker.datatype.uuid(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements()
  });
}

console.log(products);
const product = products[0];

updateProduct(product.id, {
  title: 'New title',
  stock: 80,
});

getProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['t1', 't2']
});

deleteProduct(product.id);