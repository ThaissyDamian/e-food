import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.coral};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`

export const Imagem = styled.img`
  width: 100%;
  height: 181px;
  object-fit: cover;
  display: block;
`

export const TagDestaque = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  z-index: 2;
  pointer-events: none;
`

export const Conteudo = styled.div`
  padding: 16px;
  background: ${cores.branco};
`

export const Linha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  color: ${cores.coral};
  margin: 0;
  flex: 1;
`

export const Nota = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: bold;
  color: ${cores.coral};
  font-size: 18px;
  background: ${cores.branco};
  padding: 4px 8px;
  border-radius: 8px;

  img {
    width: 16px;
    height: 16px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.coral};
  margin: 8px 0 16px;
  line-height: 1.4;
`
export const Botao = styled.button`
  background-color: ${cores.coral};
  color: ${cores.bege};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`
