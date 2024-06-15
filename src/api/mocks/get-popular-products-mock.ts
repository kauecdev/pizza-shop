import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    {
      amount: 18,
      product: 'Calabresa',
    },
    {
      amount: 14,
      product: 'Frango',
    },
    {
      amount: 24,
      product: 'Nordestina',
    },
    {
      amount: 10,
      product: 'Mista',
    },
    {
      amount: 7,
      product: 'Vegetariana 1',
    },
  ])
})
