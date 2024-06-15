import { http, HttpResponse } from 'msw'

import { SignInPayload } from '../sign-in'

export const signInMock = http.post<never, SignInPayload>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'johndoe@mail.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=simple-jwt',
        },
      })
    }

    return new HttpResponse(null, { status: 401 })
  },
)
