import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate, Link } from "react-router-dom"
import { auth } from "../firebase"
import GoogleButton from "../components/GoogleButton"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  async function handleLogin(event) {
    event.preventDefault()

    // check for empty boxes first
    if (email === "" || password === "") {
      setMessage("Please fill in all fields")
      return
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/menu")
    } catch {
      setMessage("Wrong email or password")
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-emerald-700 mb-4">Login</h1>

      <p className="text-rose-600 mb-2">{message}</p>

      <form onSubmit={handleLogin}>
        <label className="block mb-3">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded p-2 mt-1"
          />
        </label>

        <label className="block mb-3">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded p-2 mt-1"
          />
        </label>

        <button type="submit" className="w-full bg-emerald-600 text-white rounded py-2">
          Log in
        </button>
      </form>

      <GoogleButton />

      <p className="mt-4 text-center">
        No account?{" "}
        <Link to="/register" className="text-emerald-700 underline">
          Register
        </Link>
      </p>
    </div>
  )
}

export default Login