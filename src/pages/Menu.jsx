import { useEffect, useState } from "react"
import MealCard from "../components/MealCard"

function Menu() {
  const [meals, setMeals] = useState([])
  const [diet, setDiet] = useState("None")

  useEffect(() => {
    async function getMeals() {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      const data = await response.json()
      setMeals(data.meals)
    }

    getMeals()
  }, [])

  return (
    <div className="p-[24px]">
      <h1 className="text-[24px] font-bold">Menu</h1>

      <p>My diet: {diet}</p>
      <button onClick={() => setDiet("Milk")} className="border p-[8px] m-[4px]">No milk</button>
      <button onClick={() => setDiet("Sugar")} className="border p-[8px] m-[4px]">No sugar</button>
      <button onClick={() => setDiet("Flour")} className="border p-[8px] m-[4px]">No flour</button>
      <button onClick={() => setDiet("None")} className="border p-[8px] m-[4px]">Clear</button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} diet={diet} />
        ))}
      </div>
    </div>
  )
}

export default Menu