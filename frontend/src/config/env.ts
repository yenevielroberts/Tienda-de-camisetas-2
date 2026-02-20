type EnvConfig = {
  apiUrl: string
}

const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export const env: EnvConfig = {
  apiUrl,
}
