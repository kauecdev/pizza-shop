import { api } from '@/lib/axios'

export interface RegisterRestaurantPayload {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantPayload) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
