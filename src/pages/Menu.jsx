import { useEffect, useState } from "react"
import MealCard from "../components/MealCard"

function Menu() {
  const [meals, setMeals] = useState([])
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    async function getMeals() {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
        const data = await response.json()
        setMeals(data.meals)
        setMessage("")
      } catch {
        setMessage("Could not load meals")
      }
    }

    getMeals()
  }, [])

  return (
    <div className="p-[24px]">
      <h1 className="text-[24px] font-bold text-[#047857]">Menu</h1>

      <p>{message}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mt-[16px]">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  )
}

export default Menu