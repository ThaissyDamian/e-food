import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFooter = styled.section`
  background-color: ${cores.bege};
  margin-top: 120px;
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 40px;
`

export const ListLogos = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding-top: 32px;
  gap: 8px;

  #twitter {
    margin: 0 8px;
  }
`

export const Text = styled.p`
  color: ${cores.coral};
  font-size: 10px;
  width: 480px;
  text-align: center;
  display: block;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 40px;
`
