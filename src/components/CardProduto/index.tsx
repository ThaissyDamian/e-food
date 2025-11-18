import { Card, Imagem, Conteudo, Nome, Descricao, Botao } from './styles'

type Props = {
  nome: string
  descricao: string
  imagem: string
  onAdd: () => void
}

const CardProduto = ({ nome, descricao, imagem, onAdd }: Props) => (
  <Card>
    <Imagem src={imagem} alt={nome} />
    <Conteudo>
      <Nome>{nome}</Nome>
      <Descricao>{descricao}</Descricao>
      <Botao onClick={onAdd}>Mais detalhes</Botao>
    </Conteudo>
  </Card>
)

export default CardProduto
