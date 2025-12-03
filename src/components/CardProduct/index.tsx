import * as S from './styles'

type Props = {
  nome: string
  descricao: string
  imagem: string
  onAdd: () => void
}

const CardProduto = ({ nome, descricao, imagem, onAdd }: Props) => (
  <S.Card>
    <S.Imagem src={imagem} alt={nome} />
    <S.Conteudo>
      <S.Nome>{nome}</S.Nome>
      <S.Descricao>{descricao}</S.Descricao>
      <S.Botao onClick={onAdd}>Mais detalhes</S.Botao>
    </S.Conteudo>
  </S.Card>
)

export default CardProduto
