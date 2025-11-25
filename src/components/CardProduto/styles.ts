import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.coral};
  border: 1px solid ${cores.coral};
  overflow: hidden;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 280px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    margin: 0 auto;
  }
`

export const Imagem = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (max-width: ${breakpoints.desktop}) {
    height: 160px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 140px;
  }
`

export const Conteudo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 12px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px;
  }
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.bege};
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    text-align: center;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${cores.bege};
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 13px;
    line-height: 18px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }
`

export const Botao = styled.button`
  background-color: ${cores.bege};
  color: ${cores.coral};
  border: none;
  padding: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 13px;
    padding: 6px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    padding: 8px;
    width: 100%;
  }
`
