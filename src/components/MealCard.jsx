import { Link } from "react-router-dom"
import { getIngredients } from "../utils/getIngredients"

function MealCard({ meal, diet }) {
  let warning = ""

  getIngredients(meal).map((item) => {
    if (item.includes(diet)) {
      warning = "⚠ Contains " + diet
    }
  })

  return (
    <Link to={"/meal/" + meal.idMeal} className="block bg-white shadow p-[12px]">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2 className="font-bold">{meal.strMeal}</h2>
      <p className="text-[#e11d48]">{warning}</p>
    </Link>
  )
}

export default MealCard