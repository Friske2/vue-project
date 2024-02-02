import { setToken,removeToken } from '../utility/auth'
const useAuth = function() {
  const isAuth = function(): boolean {
    // implement
    return true
  }
  const token = 'TOKEN'
  const getToken = function(): string {
    // implement
    return token
  }
  const login = function(): Promise<string> {
    // implement
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setToken(token)
        resolve(token)
      }, 1000)
    })
  }
  const logout = function(): Promise<void> {
    // implement
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        removeToken()
        resolve()
      }, 1000)
    })
  }

  return {
    isAuth,
    login,
    logout,
    getToken
  }
}

export default useAuth;