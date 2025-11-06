import styled from 'styled-components'
import { cores } from '../../styles'
import headerimg from '../../assets/image/fundo.svg' // importa o vetor
export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 0 32px;
  background-color: ${cores.bege};
  background-image: url(${headerimg});
`

export const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.coral};
`

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 24px 32px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
  width: 676px;
  color: ${cores.branco};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
`
