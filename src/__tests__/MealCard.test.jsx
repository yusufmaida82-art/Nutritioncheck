import { Link } from "react-router-dom"

function MealCard({ meal }) {
  return (
    <Link
      to={`/meal/${meal.idMeal}`}
      className="block bg-white rounded shadow overflow-hidden hover:shadow-lg"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h2 className="font-bold">{meal.strMeal}</h2>
        <p className="text-sm text-gray-500">{meal.strCategory}</p>
      </div>
    </Link>
  )
}

export default MealCard