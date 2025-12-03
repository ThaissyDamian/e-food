import * as S from './styles'
import { PurchaseResponse } from '../../services/api'

type Props = {
  data?: PurchaseResponse
  onBack: () => void
}

const Confirmation = ({ data, onBack }: Props) => {
  const orderId = data?.orderId ?? '{ORDER_ID}'

  const texto = `Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.

Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.

Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.

Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!`

  return (
    <div>
      <h2>Pedido realizado - {orderId}</h2>
      <S.TextConfirmation>{texto}</S.TextConfirmation>
      <S.Botao onClick={onBack}>Concluir</S.Botao>
    </div>
  )
}

export default Confirmation
