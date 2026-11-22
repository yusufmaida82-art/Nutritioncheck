import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"

function Register() {
  // memory for what the user types
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  // lets us move to another page
  const navigate = useNavigate()

  // runs when the user clicks the button
  async function handleRegister(event) {
    event.preventDefault() // stop the page from reloading

    // simple check before asking Firebase
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters")
      return
    }

    try {
      // ask Firebase to create the account
      await createUserWithEmailAndPassword(auth, email, password)
      navigate("/menu") // success, go to the menu
    }catch (error) {
  console.log(error)
  setMessage("Registration failed: " + error.code)
}
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Register</h1>
      <p className="text-red-600">{message}</p>

      <form onSubmit={handleRegister}>
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
        <button type="submit">Create account</button>
      </form>
    </div>
  )
}

export default Register