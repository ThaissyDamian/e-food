import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  max-width: 1024px;
  margin: 40px auto;
  padding: 0 16px;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 32px auto;
    padding: 0 12px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 24px auto;
    padding: 0 8px;
  }
`

export const ListaPratos = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  list-style: none;
  margin: 40px 0;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 32px 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 24px 0;
  }
`
