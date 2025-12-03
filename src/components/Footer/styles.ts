import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ContainerFooter = styled.section`
  background-color: ${colors.beige};
  margin-top: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 80px;
    padding: 0 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 60px;
    padding: 0 16px;
  }
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 70%;
    padding-top: 24px;
  }
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

  @media (max-width: ${breakpoints.desktop}) {
    gap: 12px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    gap: 16px;
    padding-top: 24px;
  }
`

export const Text = styled.p`
  color: ${colors.coral};
  font-size: 10px;
  width: 480px;
  text-align: center;
  display: block;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    font-size: 9px;
    padding-top: 60px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    font-size: 8px;
    padding-top: 40px;
    padding-bottom: 24px;
    padding-left: 12px;
    padding-right: 12px;
  }
`
