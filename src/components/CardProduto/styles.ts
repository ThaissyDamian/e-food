import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.coral};
  border: 1px solid ${cores.coral};
  overflow: hidden;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
`

export const Imagem = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

export const Conteudo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.bege};
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${cores.bege};
  margin-bottom: 16px;
`

export const Botao = styled.button`
  background-color: ${cores.bege};
  color: ${cores.coral};
  border: none;
  padding: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`
