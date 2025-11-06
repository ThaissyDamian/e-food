import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFFFFF',
  brancoRosado: '#FFF8F2',
  coral: '#E66767',
  bege: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.brancoRosado};
    color: ${cores.coral};
  
  }

  `
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
