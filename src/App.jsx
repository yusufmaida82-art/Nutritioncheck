import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import MealDetails from "./pages/MealDetails"
import MyMeals from "./pages/MyMeals"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/*  straight o the menu */}
        <Route path="/" element={<Navigate to="/menu" />} />

        {/* pages anyone can see */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* page only users can see */}
        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />

        <Route
          path="/meal/:id"
          element={
            <ProtectedRoute>
              <MealDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-meals"
          element={
            <ProtectedRoute>
              <MyMeals />
            </ProtectedRoute>
          }
        />

        {/* other address */}
        <Route path="*" element={<h1 className="p-[24px]">Page not found</h1>} />
      </Routes>
    </>
  )
}

export default App