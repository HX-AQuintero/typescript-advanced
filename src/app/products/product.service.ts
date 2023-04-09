import { faker } from '@faker-js/faker';

import { Product } from "./product.model";
import { CreateProductDto, GetProductsDto, UpdateProductDto } from "./product.dto";

export let products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex(product => product.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
};

export const getProducts = (dto: GetProductsDto): Product[] => {
  return products;
};

export const deleteProduct = (id: Product['id']): Product[] => {
  const index = products.findIndex(product => product.id === id);
  products.splice(index, 1);
  return products;
}