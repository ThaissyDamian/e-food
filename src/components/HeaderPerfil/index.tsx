import logo from '../../assets/image/logo.svg'
import fundo from '../../assets/image/fundo.svg'
import { Imagem, Text, Banner, RestaurantName, TextBanner } from './styles'
import { Container } from '../../styles'
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
        <Text>Restaurantes</Text>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <Text>0 produto(s) no carrinho</Text>
      </Imagem>
      <Banner
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)), url(${capa}), url(${fundo})`
        }}
      >
        <Container>
          <TextBanner>{tipo}</TextBanner> {/* Italiana */}
          <RestaurantName>{titulo}</RestaurantName>
        </Container>
      </Banner>
    </>
  )
}
