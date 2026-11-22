import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import MealDetails from "./pages/MealDetails"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* only logged-in users can see this page */}
        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<h1 className="p-6">Page not found</h1>} />
      </Routes>
    </>
  )
}

export default App