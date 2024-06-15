import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      receipt: 2000,
      date: '02/01/2024',
    },
    {
      receipt: 1400,
      date: '03/01/2024',
    },
    {
      receipt: 2400,
      date: '04/01/2024',
    },
    {
      receipt: 3300,
      date: '05/01/2024',
    },
    {
      receipt: 1800,
      date: '06/01/2024',
    },
    {
      receipt: 2100,
      date: '07/01/2024',
    },
    {
      receipt: 2900,
      date: '08/01/2024',
    },
  ])
})
