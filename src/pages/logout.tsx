import { logout } from "../auth"
import { Redirect } from "@reach/router"
import React from "react"

export default function Logout() {
  logout()

  return <Redirect to="/" noThrow />
}
