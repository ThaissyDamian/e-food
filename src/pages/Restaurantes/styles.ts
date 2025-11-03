import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1024px;
  margin: 40px auto;
  padding: 0 16px;
`

export const ListaPratos = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  grid-template-rows: repeat(3, auto); /* 3 linhas */
  gap: 24px;
  list-style: none;
  margin: 40px 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* tablet: 2 colunas */
    grid-template-rows: auto; /* linhas automáticas */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* mobile: 1 coluna */
    grid-template-rows: auto;
  }
`
