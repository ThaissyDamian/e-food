import logo from '../../assets/image/logo.svg'
import headerimg from '../../assets/image/fundo.svg'

import * as S from './styles'
const Header = () => (
  <S.Imagem style={{ backgroundImage: `url(${headerimg})` }}>
    <S.Logo src={logo} alt="efood" />
    <S.Text>Viva experiências gastronômicas no conforto da sua casa</S.Text>
  </S.Imagem>
)

export default Header
