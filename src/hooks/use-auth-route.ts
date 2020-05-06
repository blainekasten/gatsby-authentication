import { useNavigate } from "@reach/router"
import { isLoggedIn } from "../auth"

export const useAuthRoute = () => {
  const navigate = useNavigate()

  if (isLoggedIn() === false) {
    navigate("/", { replace: true })
  }
}
