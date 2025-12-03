export type CartItem = {
  id: number
  nome: string
  foto: string
  preco: number
  quantidade?: number
}

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getCartTotalPrice = (items: CartItem[]) => {
  return items.reduce((acc, item) => acc + item.preco, 0)
}

export const getCheckoutTotalPrice = (
  items: { id: number; price: number }[]
) => {
  return items.reduce((acc, item) => acc + item.price, 0)
}
