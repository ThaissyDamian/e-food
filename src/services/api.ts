import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteDetalhe } from '../pages/Restaurantes'
import { RestauranteLista } from '../pages/Home'

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
    })
  })
})

export const { useGetRestaurantesQuery, useGetCardapioQuery } = api
export default api
