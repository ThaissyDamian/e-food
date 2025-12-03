import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { getCartTotalPrice, parseToBrl } from '../../utils'
import type { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import CheckoutPainel from '../Checkout/CheckoutPainel'

import * as S from './styles'

type CartItem = {
  id: number
  nome: string
  foto: string
  preco: number
}

type CartState = {
  isOpen: boolean
  items: CartItem[]
}

const Cart = () => {
  const { isOpen, items } = useSelector<RootReducer, CartState>(
    (state) => state.cart as CartState
  )

  const dispatch = useDispatch()
  const [abrirCheckout, setAbrirCheckout] = useState(false)

  const closeCart = () => {
    setAbrirCheckout(false)
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const clearCart = () => {
    dispatch(clear())
    closeCart()
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          {items.length > 0 ? (
            <>
              <ul>
                {items.map((item: CartItem) => (
                  <S.CartItemStyle key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{parseToBrl(item.preco)}</span>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button" />
                  </S.CartItemStyle>
                ))}
              </ul>
              <S.Prices>
                Valor total {parseToBrl(getCartTotalPrice(items))}
              </S.Prices>
              <S.Botao
                type="button"
                onClick={() => setAbrirCheckout(true)}
                disabled={items.length === 0}
              >
                Continuar com a entrega
              </S.Botao>
            </>
          ) : (
            <p className="empty-text">
              O carrinho está vazio, adicione um produto para continuar com a
              compra.
            </p>
          )}
        </S.Sidebar>
      </S.CartContainer>

      {abrirCheckout && (
        <CheckoutPainel
          onClose={() => setAbrirCheckout(false)}
          onFinishOrder={clearCart}
          cartItems={items.map((item: CartItem) => ({
            id: item.id,
            price: item.preco
          }))}
        />
      )}
    </>
  )
}

export default Cart
