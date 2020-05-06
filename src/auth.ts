export const isLoggedIn = () => localStorage.getItem("LOGIN") === "true"

export const login = () => localStorage.setItem("LOGIN", "true")

export const logout = () => localStorage.removeItem("LOGIN")
