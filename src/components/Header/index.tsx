import { Imagem, Logo, Text } from './styles'
import logo from '../../assets/image/logo.svg'
import headerimg from '../../assets/image/fundo.svg'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${headerimg})` }}>
    <Logo src={logo} alt="efood" />
    <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
  </Imagem>
)

export default Header
