import { ContainerFooter, Logo, ListLogos, Text } from './styles'
import logo from '../../assets/image/logo.svg'
import twitter from '../../assets/image/Twiter.svg'
import instagram from '../../assets/image/Instagram.svg'
import facebook from '../../assets/image/Facebook.svg'

const Footer = () => (
  <ContainerFooter>
    <Logo src={logo} alt="efood" />
    <ListLogos>
      <li>
        <img src={instagram} alt="Instagram" />
      </li>
      <li>
        <img src={facebook} alt="Facebook" />
      </li>
      <li>
        <img src={twitter} alt="Twitter" />
      </li>
    </ListLogos>
    <Text>© 2025 efood — Todos os direitos reservados.</Text>
  </ContainerFooter>
)

export default Footer
