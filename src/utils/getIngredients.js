// collect the 20 ingredient fields into one list
export function getIngredients(meal) {
  const list = []

  for (let i = 1; i <= 20; i++) {
    const name = meal["strIngredient" + i]
    const amount = meal["strMeasure" + i]

    if (name && name.trim() !== "") {
      list.push(amount + " " + name)
    }
  }

  return list
}