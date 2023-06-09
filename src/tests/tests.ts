import { Shop } from "../models"
import { assert } from "../utils"

export const test1 = (shop: Shop) => {
  console.log("Test 1: Start")
  assert(!shop.deleteProduct("1"))
  console.log("Test 1: Completed")
}

export const test2 = (shop: Shop) => {
  console.log("Test 2: Start")

  assert(shop.addNewProduct({ id: "1", name: "1", producer: "Lex" }))

  assert(
    !shop.addNewProduct({
      id: "1",
      name: "any name because we check id only",
      producer: "any producer",
    }),
  )

  assert(shop.deleteProduct("1"))

  console.log("Test 2: Completed")
}

export const test3 = (shop: Shop) => {
  console.log("Test 3: Start")

  assert(
    shop.addNewProduct({
      id: "3",
      name: "Some Product3",
      producer: "Some Producer2",
    }),
  )

  assert(
    shop.addNewProduct({
      id: "4",
      name: "Some Product1",
      producer: "Some Producer3",
    }),
  )

  assert(
    shop.addNewProduct({
      id: "2",
      name: "Some Product2",
      producer: "Some Producer2",
    }),
  )

  assert(
    shop.addNewProduct({
      id: "1",
      name: "Some Product1",
      producer: "Some Producer1",
    }),
  )

  assert(
    shop.addNewProduct({
      id: "5",
      name: "Other Product5",
      producer: "Other Producer4",
    }),
  )

  assert(
    shop.addNewProduct({
      id: "6",
      name: "Other Product6",
      producer: "Other Producer4",
    }),
  )

  assert(
    shop.addNewProduct({
      id: "7",
      name: "Other Product7",
      producer: "Other Producer4",
    }),
  )

  assert(
    shop.addNewProduct({
      id: "8",
      name: "Other Product8",
      producer: "Other Producer4",
    }),
  )

  assert(
    shop.addNewProduct({
      id: "9",
      name: "Other Product9",
      producer: "Other Producer4",
    }),
  )

  assert(
    shop.addNewProduct({
      id: "10",
      name: "Other Product10",
      producer: "Other Producer4",
    }),
  )

  assert(
    shop.addNewProduct({
      id: "11",
      name: "Other Product11",
      producer: "Other Producer4",
    }),
  )

  console.log("Test 3: Completed")
}

export const test4 = (shop: Shop) => {
  console.log("Test 4: Start")

  let byNames: string[] = shop.listProductsByName("Product")

  assert(byNames.length === 10)

  console.log("Test 4: Completed")
}

export const test5 = (shop: Shop) => {
  console.log("Test 5: Start")

  let byNames = shop.listProductsByName("Some Product")

  assert(byNames.length == 4)
  assert(byNames.indexOf("Some Producer3 - Some Product1") >= 0)
  assert(byNames.indexOf("Some Product2") >= 0)
  assert(byNames.indexOf("Some Product3") >= 0)
  assert(byNames.indexOf("Some Product1") < 0)
  assert(byNames.indexOf("Some Producer1 - Some Product1") >= 0)

  console.log("Test 5: Completed")
}

export const test6 = (shop: Shop) => {
  console.log("Test 6: Start")

  let byProducer: string[] = shop.listProductsByProducer("Producer")
  assert(byProducer.length == 10)

  console.log("Test 6: Completed")
}

export const test7 = (shop: Shop) => {
  console.log("Test 7: Start")

  let byProducer = shop.listProductsByProducer("Some Producer")
  console.log(byProducer)

  assert(byProducer.length == 4)
  assert(byProducer[0] == "Some Product1")
  assert(byProducer[1] == "Some Product2" || byProducer[1] == "Some Product3")
  assert(byProducer[2] == "Some Product2" || byProducer[2] == "Some Product3")
  assert(byProducer[3] == "Some Product1")

  console.log("Test 7: Completed")
}
