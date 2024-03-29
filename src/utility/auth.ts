export function hasToken(): boolean{
  return !!localStorage.getItem('token')
}

export function setToken(token: string): void{
  localStorage.setItem('token', token)
}

export function removeToken(): void{
  localStorage.removeItem('token')
}