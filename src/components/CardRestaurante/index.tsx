import {
  Card,
  Imagem,
  Conteudo,
  Titulo,
  Descricao,
  Botao,
  TagDestaque,
  Linha
} from './styles'
import { useNavigate } from 'react-router-dom'
import Tag from '../Tag'
import { Nota } from './styles'

import estrela from '../../assets/image/estrela.png'

type Props = {
  id: number
  nome: string
  descricao: string
  imagem: string
  tipo: string
  nota: number
  destaque?: boolean
}

const CardRestaurante = ({
  id,
  nome,
  descricao,
  imagem,
  tipo,
  nota,
  destaque
}: Props) => {
  const navigate = useNavigate()

  return (
    <Card>
      <div style={{ position: 'relative' }}>
        <Imagem src={imagem} alt={nome} />
        <TagDestaque>
          {destaque && <Tag size="big">Destaque da semana</Tag>}
          <Tag size="small">{tipo}</Tag>
        </TagDestaque>
      </div>

      <Conteudo>
        <Linha>
          <Titulo>{nome}</Titulo>
          <Nota>
            {nota.toFixed(1)}
            <img src={estrela} alt="estrela" />
          </Nota>
        </Linha>

        <Descricao>{descricao}</Descricao>
        <Botao onClick={() => navigate(`/restaurante/${id}`)}>Saiba mais</Botao>
      </Conteudo>
    </Card>
  )
}

export default CardRestaurante
