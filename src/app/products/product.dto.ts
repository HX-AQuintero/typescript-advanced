import { Product } from "./product.model";

// Omit
// type example1 = Omit<Product, 'id'>
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// ejemplo con Pick
// type example2 = Pick<Product, 'color' | 'description'>;

// Partial
// type example3 = Partial<Product>
export interface UpdateProductDto extends Partial<CreateProductDto>{};

// ejemplo de Required
// type example4 = Required<Product>;

//Readonly
// type example5 = Readonly<Product>;
export interface GetProductsDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags: ReadonlyArray<string>;
};

//Utility Types Anidados+
// type GetProductsDto2 = Readonly<Partial<Omit<Product, 'tags'>>>;