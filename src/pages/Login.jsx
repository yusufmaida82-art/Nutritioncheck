import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"

function Login() {
  // memory for what the user types
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // memory for an error message (empty at first)
  const [message, setMessage] = useState("")

  // lets us move to another page
  const navigate = useNavigate()

  // runs when the user clicks "Log in"
  async function handleLogin(event) {
    // stop the page from reloading
    event.preventDefault()

    try {
      // ask Firebase to check the email and password
      await signInWithEmailAndPassword(auth, email, password)

      // it worked, so go to the menu page
      navigate("/menu")
    } catch (error) {
      // it failed, so show a message
      setMessage("Wrong email or password")
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Login</h1>

      <p className="text-red-600">{message}</p>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login