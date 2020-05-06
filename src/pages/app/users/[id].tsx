import React from "react"
import Layout from "../../../components/layout"
import users from "../../../users.json"
import { Redirect } from "@reach/router"
import { useAuthRoute } from "../../../hooks/use-auth-route"

export default function User(props) {
  useAuthRoute()

  const id = props.params.id
  const user = users.find(u => u.id === id)

  if (!user) {
    return <Redirect to="/app/users" noThrow />
  }

  return (
    <Layout>
      <h1>User</h1>
      <hr />
      <h3>Name: {user.first}</h3>
      <h3>id: {user.id}</h3>
    </Layout>
  )
}
