import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RestauranteDetalhe } from '../pages/Restaurants'
import { RestauranteLista } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export type PurchaseResponse = {
  orderId: string | number
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<RestauranteLista[], void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<RestauranteDetalhe, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (payload) => ({
        url: 'https://api-ebac.vercel.app/api/efood/checkout',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetCardapioQuery,
  usePurchaseMutation
} = api
export default api
