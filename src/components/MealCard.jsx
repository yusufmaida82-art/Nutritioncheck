import { Link } from "react-router-dom"

function MealCard({ meal }) {
  return (
    <Link to={"/meal/" + meal.idMeal} className="block bg-white rounded shadow p-3">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded" />
      <h2 className="font-bold mt-2">{meal.strMeal}</h2>
    </Link>
  )
}

export default MealCard