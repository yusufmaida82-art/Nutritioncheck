import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth, googleProvider } from "../firebase"

function GoogleButton() {
  const navigate = useNavigate()

  async function handleGoogle() {
    try {
      // opens the Google popup
      await signInWithPopup(auth, googleProvider)
      navigate("/menu")
    } catch {
      alert("Google sign-in failed, please try again")
    }
  }

  return (
    <button
      type="button"
      onClick={handleGoogle}
      className="w-full border border-gray-300 rounded py-2 mt-3"
    >
      Continue with Google
    </button>
  )
}

export default GoogleButton