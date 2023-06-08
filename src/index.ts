/**
The task is to implement the Shop protocol (you can do that in this file directly).
- No database or any other storage is required, just store data in memory
- No any smart search, use String method contains (case sensitive/insensitive - does not matter)
– Performance optimizations are optional
 */

import { test } from "./tests"
import { Product, Shop } from "./models"

class ShopImpl implements Shop {
  shopProducts = new Array<Product>()

  addNewProduct(product: Product): boolean {
    if (this.shopProducts.find((e) => e.id === product.id)) {
      return false
    } else {
      this.shopProducts.push(product)
      this.shopProducts = this.shopProducts.sort((a, b) => Number(a.id) - Number(b.id))
      return true
    }
  }

  deleteProduct(id: string): boolean {
    if (this.shopProducts.find((e) => e.id === id)) {
      this.shopProducts = this.shopProducts.filter((e) => e.id !== id)
      return true
    } else {
      return false
    }
  }

  listProductsByName(searchString: string): string[] {
    let products: Product[] = this.shopProducts
      .filter((e) => e.name.includes(searchString))
      .slice(-10)

    let list: string[] = products.map((e) =>
      products.filter((el) => el.name === e.name).length > 1
        ? `${e.producer} - ${e.name}`
        : e.name,
    )

    return list
  }

  listProductsByProducer(searchString: string): string[] {
    const list: string[] = this.shopProducts
      .filter((e) => e.producer.includes(searchString))
      .slice(-10)
      .map((e) => e.name)

    return list
  }
}

test(new ShopImpl())
