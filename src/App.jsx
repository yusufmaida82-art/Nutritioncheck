import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <Routes>
      {/* anyone can see these pages */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* only logged-in users can see this page */}
      <Route
        path="/menu"
        element={
          <ProtectedRoute>
            <h1>Menu coming soon</h1>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App