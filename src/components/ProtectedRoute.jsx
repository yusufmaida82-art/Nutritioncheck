import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function ProtectedRoute({ children }) {
  // read the shared notice board
  const authInfo = useAuth()

  // 1. Firebase is still checking, so ask the user to wait
  if (authInfo.loading === true) {
    return <p>Loading...</p>
  }

  // 2. nobody is logged in, so send them to the login page
  if (authInfo.user === null) {
    return <Navigate to="/login" />
  }

  // 3. someone is logged in, so show the page
  return children
}

export default ProtectedRoute