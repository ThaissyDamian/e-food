import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo.svg'
import headerimg from '../../assets/image/fundo.svg'
import {
  Imagem,
  Text,
  Banner,
  RestaurantName,
  TextBanner,
  ImagemInner,
  BannerInner
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

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
      <Imagem>
        <ImagemInner>
          <Text className="left">Restaurantes</Text>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
          <Text
            className="right"
            onClick={openCart}
            style={{ cursor: 'pointer' }}
          >
            {items.length} produto(s) no carrinho
          </Text>
        </ImagemInner>
      </Imagem>
      <Banner
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
        <BannerInner>
          <TextBanner>{tipo}</TextBanner> {/* Italiana */}
          <RestaurantName>{titulo}</RestaurantName>
        </BannerInner>
      </Banner>
    </>
  )
}
export default HeaderPerfil
