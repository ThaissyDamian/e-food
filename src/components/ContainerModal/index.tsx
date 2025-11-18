import { CardModal, Backdrop, ContainerIterno, Overlay } from './styles'
import fechar from '../../assets/image/close.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

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

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const ContainerModal = ({ produto, onClose, isVisible = true }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(produto))
    dispatch(open())
    onClose()
  }

  return (
    <Overlay className={isVisible ? 'visivel' : ''}>
      <Backdrop className="overlay" onClick={onClose} />

      <CardModal>
        <header>
          <img src={fechar} alt="icone de fechar" onClick={onClose} />
        </header>

        <ContainerIterno>
          <img src={produto.foto} alt={produto.nome} />
          <div>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>Serve: {produto.porcao}</p>
            <button onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(produto.preco)}
            </button>
          </div>
        </ContainerIterno>
      </CardModal>
    </Overlay>
  )
}

export default ContainerModal
