import { Product } from "./Product"

export interface Shop {
  /**
      Adds a new product object to the Shop.
      - Parameter product: product to add to the Shop
      - Returns: false if the product with same id already exists in the Shop, true – otherwise.
     */
  addNewProduct: (product: Product) => boolean

  /**
      Deletes the product with the specified id from the Shop.
      - Returns: true if the product with same id existed in the Shop, false – otherwise.
     */
  deleteProduct: (id: string) => boolean

  /**
      - Returns: 10 product names containing the specified string. If there are several products with the same name, producer's name is appended to product's name.
     */
  listProductsByName: (searchString: string) => string[]

  /**
      - Returns: 10 product names whose producer contains the specified string, ordered by producers.
     */
  listProductsByProducer: (searchString: string) => string[]
}
