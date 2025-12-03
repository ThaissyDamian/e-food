import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../assets/image/logo.svg'
import headerimg from '../../assets/image/fundo.svg'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import * as S from './styles'

type Props = {
  tipo: string
  titulo: string
  capa: string
}

function HeaderPerfil({ tipo, titulo, capa }: Props) {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <S.Imagem>
        <S.ImagemInner>
          <S.Text className="left">Restaurantes</S.Text>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
          <S.Text
            role="button"
            className="right"
            onClick={openCart}
            style={{ cursor: 'pointer' }}
          >
            {items.length} produto(s) no carrinho
          </S.Text>
        </S.ImagemInner>
      </S.Imagem>
      <S.Banner
        style={{
          backgroundImage: `
      linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)),
      url(${capa}),
      url(${headerimg})
    `,
          backgroundRepeat: 'no-repeat, no-repeat, repeat',
          backgroundSize: 'cover, cover, auto',
          backgroundPosition: 'center, center, top left'
        }}
      >
        <S.BannerInner>
          <S.TextBanner>{tipo}</S.TextBanner> {/* Italiana */}
          <S.RestaurantName>{titulo}</S.RestaurantName>
        </S.BannerInner>
      </S.Banner>
    </>
  )
}
export default HeaderPerfil
