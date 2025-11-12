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
import { Link } from 'react-router-dom'

type Props = {
  tipo: string
  titulo: string
  capa: string
}

export default function HeaderPerfil({ tipo, titulo, capa }: Props) {
  return (
    <>
      <Imagem>
        <ImagemInner>
          <Text>Restaurantes</Text>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
          <Text>0 produto(s) no carrinho</Text>
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
