import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { vi } from "vitest"
import Login from "../pages/Login"

vi.mock("../firebase", () => ({ auth: {}, googleProvider: {} }))

test("shows the login page", () => {
  render(<MemoryRouter><Login /></MemoryRouter>)
  expect(screen.getByText("Login")).toBeInTheDocument()
})

test("shows a message when the boxes are empty", () => {
  render(<MemoryRouter><Login /></MemoryRouter>)
  fireEvent.click(screen.getByText("Log in"))
  expect(screen.getByText("Please fill in all fields")).toBeInTheDocument()
})