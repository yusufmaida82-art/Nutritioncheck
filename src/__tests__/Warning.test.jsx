import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import MealCard from "../components/MealCard"

test("shows a warning when the meal has milk", () => {
  const meal = { idMeal: "1", strMeal: "Pancakes", strMealThumb: "p.jpg", strIngredient1: "Milk", strMeasure1: "1 cup" }

  render(
    <MemoryRouter>
      <MealCard meal={meal} diet="Milk" />
    </MemoryRouter>
  )

  expect(screen.getByText("⚠ Contains Milk")).toBeInTheDocument()
})