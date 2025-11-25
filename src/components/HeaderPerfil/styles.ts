import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import headerimg from '../../assets/image/fundo.svg'

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  background-color: ${cores.bege};
  background-image: url(${headerimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: ${breakpoints.desktop}) {
    height: 160px;
    padding: 0 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    height: auto;
    padding: 16px;
    gap: 12px;
    text-align: center;
  }
`
export const ImagemInner = styled.div`
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    text-align: center;
    padding: 16px;
  }
`
export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 125px;
  height: 57px;
  justify-self: center;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80px;
  }
`

export const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.coral};
  margin: 0;

  &.left {
    justify-self: start;
  }

  &.right {
    justify-self: end;
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    justify-self: center;
  }
`

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;

  @media (max-width: ${breakpoints.desktop}) {
    height: 220px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 180px;
  }
`
export const BannerInner = styled.div`
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 16px 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 12px 16px;
    align-items: center;
    text-align: center;
  }
`
export const TextBanner = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 32px;
  line-height: 100%;
  color: ${cores.branco};
  display: block;
  margin-bottom: 152px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 26px;
    margin-bottom: 100px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    margin-bottom: 60px;
  }
`

export const RestaurantName = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;
  width: 1024px;
  color: ${cores.branco};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 26px;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    width: 100%;
  }
`
