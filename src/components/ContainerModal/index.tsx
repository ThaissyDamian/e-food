import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import close from '../../assets/image/close.png'

import { parseToBrl } from '../../utils'

import * as S from './styles'

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

const ContainerModal = ({ produto, onClose, isVisible = true }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(produto))
    dispatch(open())
    onClose()
  }

  return (
    <S.Overlay className={isVisible ? 'visivel' : ''}>
      <S.Backdrop className="overlay" onClick={onClose} />

      <S.CardModal>
        <header>
          <img src={close} alt="icone de fechar" onClick={onClose} />
        </header>

        <S.ContainerIterno>
          <img src={produto.foto} alt={produto.nome} />
          <div>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>Serve: {produto.porcao}</p>
            <button onClick={addToCart}>
              Adicionar ao carrinho - {parseToBrl(produto.preco)}
            </button>
          </div>
        </S.ContainerIterno>
      </S.CardModal>
    </S.Overlay>
  )
}

export default ContainerModal
