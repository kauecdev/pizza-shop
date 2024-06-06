import { api } from '@/lib/axios'

interface SignInPayload {
  email: string
}

export async function signIn({ email }: SignInPayload) {
  await api.post('/authenticate', { email })
}
