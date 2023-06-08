import { Shop } from "../models"
import { test1, test2, test3, test4, test5, test6, test7 } from "./tests"

export const test = (shop: Shop) => {
  try {
    test1(shop)
    test2(shop)
    test3(shop)
    test4(shop)
    test5(shop)
    test6(shop)
    test7(shop)

  } catch (err) {
    console.error("Test Error")
    console.error(err)
  }
}
