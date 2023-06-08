/**
The task is to implement the Shop protocol (you can do that in this file directly).
- No database or any other storage is required, just store data in memory
- No any smart search, use String method contains (case sensitive/insensitive - does not matter)
– Performance optimizations are optional
 */

import { test } from "./tests"
import { Product, Shop } from "./models"

class ShopImpl implements Shop {
   shopProducts = new Map<string, Product>()


  addNewProduct(product: Product): boolean {
    if (this.shopProducts.has(product.id)) {
      return false
    } else {
      this.shopProducts.set(product.id, product)
      this.shopProducts = new Map([...this.shopProducts.entries()].sort())
      return true
    }
  }

  deleteProduct(id: string): boolean {
    if (this.shopProducts.has(id)) {
      this.shopProducts.delete(id)
      return true
    } else {
      return false
    }
  }

  listProductsByName(searchString: string): string[] {
    let list = new Map<string, Product[]>()

    for (let item of this.shopProducts.values()) {
      if (item.name.includes(searchString)) {
        const products = list.get(item.name)

        if (products) {
          list.set(item.name, [item, ...products])
        } else {
          list.set(item.name, [item])
        }
      }
    }

    let res: string[] = []

    for (let products of list.values()) {
      if (products.length > 1) {
        res.push(...products.map((e) => `${e.producer} - ${e.name}`))
      } else {
        res.push(...products.map((e) => e.name))
      }
    }

    return res.slice(-10)
  }

  listProductsByProducer(searchString: string): string[] {
    let list: string[] = []

    for (let product of this.shopProducts.values()) {
      if (product.producer.includes(searchString)) {
        list.push(product.name)
      }
    }

    return list.slice(-10)
  }
}

test(new ShopImpl())
