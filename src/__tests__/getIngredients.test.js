import { getIngredients } from "../utils/getIngredients"

test("makes a list", () => {
  expect(getIngredients({ strIngredient1: "Rice", strMeasure1: "2" })).toEqual(["2 Rice"])
})