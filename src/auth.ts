// @ts-ignore
let localStorage = global.localStorage

if (!localStorage) {
  const store = {}
  localStorage = {
    getItem(key) {
      return store[key]
    },
    setItem(key, value) {
      store[key] = JSON.stringify(value)
    },
    removeItem(key) {
      delete store[key]
    },
  }
}

export const isLoggedIn = () => localStorage.getItem("LOGIN") === "true"

export const login = () => localStorage.setItem("LOGIN", "true")

export const logout = () => localStorage.removeItem("LOGIN")
