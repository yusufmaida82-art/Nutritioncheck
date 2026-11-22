import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"

// the shared notice board
const AuthContext = createContext()

export function AuthProvider({ children }) {
  // user is null when nobody is logged in
  const [user, setUser] = useState(null)
  // true while Firebase checks if someone is already logged in
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Firebase tells us whenever someone logs in or out
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

// a shortcut so any page can read who is logged in
export function useAuth() {
  return useContext(AuthContext)
}