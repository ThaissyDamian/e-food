import {
  Card,
  Imagem,
  Conteudo,
  Titulo,
  Descricao,
  Botao,
  TagDestaque,
  Linha,
  Nota
} from './styles'
import { useNavigate } from 'react-router-dom'
import Tag from '../Tag'
import estrela from '../../assets/image/estrela.png'

type Props = {
  id: number
  titulo: string
  descricao: string
  capa: string
  tipo: string
  avaliacao: number
  destacado?: boolean
}

const CardRestaurante = ({
  id,
  titulo,
  descricao,
  capa,
  tipo,
  avaliacao,
  destacado
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 147) + '...'
    }
    return descricao
  }
  const navigate = useNavigate()

  return (
    <Card>
      <div style={{ position: 'relative' }}>
        <Imagem src={capa} alt={titulo} />
        <TagDestaque>
          {destacado && <Tag size="big">Destaque da semana</Tag>}
          <Tag size="small">{tipo}</Tag>
        </TagDestaque>
      </div>

      <Conteudo>
        <Linha>
          <Titulo>{titulo}</Titulo>
          <Nota>
            {avaliacao.toFixed(1)}
            <img src={estrela} alt="estrela" />
          </Nota>
        </Linha>

        <Descricao>{getDescricao(descricao)}</Descricao>
        <Botao onClick={() => navigate(`/restaurante/${id}`)}>Saiba mais</Botao>
      </Conteudo>
    </Card>
  )
}

export default CardRestaurante
