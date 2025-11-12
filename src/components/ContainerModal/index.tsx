import { CardModal, ContainerIterno, Overlay } from './styles'
import close from '../../assets/image/close.png'

type Props = {
  produto: {
    id: number
    nome: string
    descricao: string
    foto: string
  }
  onClose: () => void
}

const ContainerModal = ({ produto, onClose }: Props) => (
  <Overlay>
    <CardModal>
      <header>
        <img src={close} alt="Icone de fechar" onClick={onClose} />
      </header>
      <ContainerIterno>
        <img src={produto.foto} alt={produto.nome} />
        <div>
          <h2>{produto.nome}</h2>
          <p>{produto.descricao}</p>
          <p> Serve: de 2 a 3 pessoas.</p>
          <button>Adicionar ao carrinho - R$ 60,90</button>
        </div>
      </ContainerIterno>
    </CardModal>
  </Overlay>
)
export default ContainerModal
