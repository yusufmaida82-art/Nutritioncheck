import { useEffect, useState } from "react"
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "../firebase"
import { useAuth } from "../context/AuthContext"

function MyMeals() {
  const { user } = useAuth()
  const [meals, setMeals] = useState([])

  async function loadMeals() {
    const result = await getDocs(collection(db, "users", user.uid, "meals"))
    setMeals(result.docs)
  }

  useEffect(() => {
    loadMeals()
  }, [])

  async function handleNote(id) {
    const note = prompt("Write a note")
    await updateDoc(doc(db, "users", user.uid, "meals", id), { note: note })
    loadMeals()
  }

  async function handleDelete(id) {
    await deleteDoc(doc(db, "users", user.uid, "meals", id))
    loadMeals()
  }

  return (
    <div className="p-[24px]">
      <h1 className="text-[24px] font-bold">My Meals</h1>

      {meals.map((meal) => (
        <div key={meal.id} className="border p-[8px] mt-[8px]">
          <h2 className="font-bold">{meal.data().name}</h2>
          <p>Note: {meal.data().note}</p>
          <button onClick={() => handleNote(meal.id)} className="border p-[4px]">Edit note</button>
          <button onClick={() => handleDelete(meal.id)} className="border p-[4px]">Delete</button>
        </div>
      ))}
    </div>
  )
}

export default MyMeals