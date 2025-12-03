import logo from '../../assets/image/logo.svg'
import twitter from '../../assets/image/Twiter.svg'
import instagram from '../../assets/image/Instagram.svg'
import facebook from '../../assets/image/Facebook.svg'

import * as S from './styles'

const Footer = () => (
  <S.ContainerFooter>
    <S.Logo src={logo} alt="efood" />
    <S.ListLogos>
      <li>
        <img src={instagram} alt="Instagram" />
      </li>
      <li>
        <img src={facebook} alt="Facebook" />
      </li>
      <li>
        <img src={twitter} alt="Twitter" />
      </li>
    </S.ListLogos>
    <S.Text>© 2025 efood — Todos os direitos reservados.</S.Text>
  </S.ContainerFooter>
)

export default Footer
