import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"
import { useAuth } from "../context/AuthContext"
import { getIngredients } from "../utils/getIngredients"

function MealDetails() {
  const { id } = useParams()
  const { user } = useAuth()
  const [meal, setMeal] = useState(null)

  useEffect(() => {
    async function getMeal() {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
      const data = await response.json()
      setMeal(data.meals[0])
    }

    getMeal()
  }, [id])

  async function handleSave() {
    await addDoc(collection(db, "users", user.uid, "meals"), {
      name: meal.strMeal,
      image: meal.strMealThumb,
      note: "",
    })
    alert("Saved!")
  }

  if (meal === null) {
    return <p>Loading...</p>
  }

  return (
    <div className="p-[24px]">
      <Link to="/menu">Back to menu</Link>
      <h1 className="text-[24px] font-bold">{meal.strMeal}</h1>
      <button onClick={handleSave} className="border p-[8px]">Save to My Meals</button>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-[256px]" />

      <h2 className="font-bold">Ingredients</h2>
      <ul>
        {getIngredients(meal).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default MealDetails