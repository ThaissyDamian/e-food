import { useNavigate } from 'react-router-dom'

import Tag from '../Tag'
import estrela from '../../assets/image/estrela.png'

import * as S from './styles'

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
    <S.Card>
      <div style={{ position: 'relative' }}>
        <S.Imagem src={capa} alt={titulo} />
        <S.TagDestaque>
          {destacado && <Tag size="big">Destaque da semana</Tag>}
          <Tag size="small">{tipo}</Tag>
        </S.TagDestaque>
      </div>

      <S.Conteudo>
        <S.Linha>
          <S.Titulo>{titulo}</S.Titulo>
          <S.Nota>
            {avaliacao.toFixed(1)}
            <img src={estrela} alt="estrela" />
          </S.Nota>
        </S.Linha>

        <S.Descricao>{getDescricao(descricao)}</S.Descricao>
        <S.Botao onClick={() => navigate(`/restaurante/${id}`)}>
          Saiba mais
        </S.Botao>
      </S.Conteudo>
    </S.Card>
  )
}

export default CardRestaurante
