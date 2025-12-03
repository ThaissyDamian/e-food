import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    height: 320px;
    margin-bottom: 60px;
    padding: 0 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    text-align: center;
    padding: 16px;
    height: auto;
    margin-bottom: 40px;
  }
`

export const Logo = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 70%;
  }
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;
  color: ${colors.coral};
  margin-top: 138px;
  max-width: 550px;
  text-align: center;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 28px;
    margin-top: 100px;
    max-width: 450px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 22px;
    margin-top: 40px;
    max-width: 100%;
    padding: 0 12px;
  }
`
