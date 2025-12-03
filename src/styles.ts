import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  rosyWhite: '#FFF8F2',
  coral: '#E66767',
  beige: '#FFEBD9',
  darkGray: '#4B4B4B'
}
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}
export const GlobalCss = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.rosyWhite};
    color: ${colors.coral};

  }

  `
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 8px;
  }
`
