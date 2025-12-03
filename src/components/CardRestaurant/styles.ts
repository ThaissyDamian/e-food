import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.coral};
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    border-radius: 6px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    max-width: 90%;
  }
`

export const Imagem = styled.img`
  width: 100%;
  height: 181px;
  object-fit: cover;
  display: block;

  @media (max-width: ${breakpoints.desktop}) {
    height: 160px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 140px;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    top: 8px;
    right: 8px;
    gap: 4px;
  }
`

export const Conteudo = styled.div`
  padding: 16px;
  background: ${colors.white};

  @media (max-width: ${breakpoints.desktop}) {
    padding: 12px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 10px;
  }
`

export const Linha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  color: ${colors.coral};
  margin: 0;
  flex: 1;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    text-align: left;
  }
`

export const Nota = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: bold;
  color: ${colors.coral};
  font-size: 18px;
  background: ${colors.white};
  padding: 4px 8px;
  border-radius: 8px;

  img {
    width: 16px;
    height: 16px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    padding: 2px 6px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${colors.coral};
  margin: 8px 0 16px;
  line-height: 1.4;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 13px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    margin: 6px 0 12px;
  }
`
export const Botao = styled.button`
  background-color: ${colors.coral};
  color: ${colors.beige};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 13px;
    padding: 6px 14px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    padding: 6px 12px;
    width: 100%;
  }
`
