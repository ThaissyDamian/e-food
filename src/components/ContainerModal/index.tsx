import { CardModal, Backdrop, ContainerIterno, Overlay } from './styles'
import close from '../../assets/image/close.png'

type Produto = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type Props = {
  produto: Produto
  onClose: () => void
  isVisible?: boolean
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ContainerModal = ({ produto, onClose, isVisible = true }: Props) => (
  <Overlay className={isVisible ? 'visivel' : ''}>
    <Backdrop className="overlay" onClick={onClose} />

    <CardModal>
      <header>
        <img src={close} alt="icone de fechar" onClick={onClose} />
      </header>

      <ContainerIterno>
        <img src={produto.foto} alt={produto.nome} />
        <div>
          <h2>{produto.nome}</h2>
          <p>{produto.descricao}</p>
          <p>Serve: {produto.porcao}</p>
          <button>Adicionar ao carrinho - {formataPreco(produto.preco)}</button>
        </div>
      </ContainerIterno>
    </CardModal>
  </Overlay>
)

export default ContainerModal
