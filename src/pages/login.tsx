import { login } from "../auth"
import { Redirect } from "@reach/router"
import React from "react"

export default function Login() {
  console.log("logging in")
  login()

  return <Redirect to="/app" noThrow />
}
