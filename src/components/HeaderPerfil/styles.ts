import styled from 'styled-components'
import { cores } from '../../styles'
import headerimg from '../../assets/image/fundo.svg'

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  background-color: ${cores.bege};
  background-image: url(${headerimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
export const ImagemInner = styled.div`
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 0;
`

export const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.coral};
  margin: 0;
`

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
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
`
export const TextBanner = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 32px;
  line-height: 100%;
  color: ${cores.branco};
  display: block;
  margin-bottom: 152px;
`

export const RestaurantName = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;
  width: 1024px;
  color: ${cores.branco};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
`
