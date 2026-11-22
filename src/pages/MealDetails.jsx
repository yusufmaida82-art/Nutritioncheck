import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getIngredients } from "../utils/getIngredients"

function MealDetails() {
  // read the id from the address, e.g. /meal/52772
  const { id } = useParams()

  const [meal, setMeal] = useState(null)
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    async function getMeal() {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
        const data = await response.json()
        setMeal(data.meals[0])
      } catch {
        setMessage("Could not load this meal")
      }
    }

    getMeal()
  }, [id])

  // no meal yet, so show the message
  if (meal === null) {
    return <p className="p-6">{message}</p>
  }

  return (
    <div className="p-6">
      <Link to="/menu" className="text-emerald-700 underline">Back to menu</Link>

      <h1 className="text-2xl font-bold mt-4">{meal.strMeal}</h1>

      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-64 rounded mt-4" />

      <h2 className="text-xl font-bold mt-4">Ingredients</h2>
      <ul>
        {getIngredients(meal).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default MealDetails