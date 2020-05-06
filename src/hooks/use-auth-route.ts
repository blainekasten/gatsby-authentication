import { useNavigate } from "@reach/router"
import { isLoggedIn } from "../auth"
import { useEffect } from "react"

export const useAuthRoute = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn() === false) {
      navigate("/", { replace: true })
    }
  }, [])
}
