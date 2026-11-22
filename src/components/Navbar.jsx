import { signOut } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { useAuth } from "../context/AuthContext"

function Navbar() {
  const { user } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await signOut(auth)
    alert("You have logged out")
    navigate("/login")
  }

  return (
    <nav className="bg-emerald-700 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        NutriCheck
      </Link>

            {user ? (
                <div className="flex gap-[16px]">
                <Link to="/menu">Menu</Link>
                  <Link to="/my-meals">My Meals</Link>
            <button onClick={handleLogout} className="bg-rose-600 px-3 py-1 rounded">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar