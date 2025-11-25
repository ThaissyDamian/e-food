import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
