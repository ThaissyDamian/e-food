import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

type TagProps = {
  size: 'big' | 'small'
}

export const TagContainer = styled.div<TagProps>`
  background-color: ${cores.coral};
  color: ${cores.bege};
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 700;
  width: ${(props) => (props.size === 'big' ? '121px' : '61px')};
  height: 26px;
  display: flex;
  margin: 8px;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 11px;
    width: ${(props) => (props.size === 'big' ? '100px' : '55px')};
    height: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 10px;
    width: ${(props) => (props.size === 'big' ? '90px' : '50px')};
    height: 22px;
    margin: 4px auto;
  }
`

export const TagText = styled.span`
  text-align: center;
`
export const Nota = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${cores.branco};
  color: ${cores.coral};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 12px;
    padding: 3px 6px;
    top: 12px;
    right: 12px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 11px;
    padding: 2px 6px;
    top: 8px;
    right: 8px;
  }
`
