import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 185px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  background-color: ${cores.bege};
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
  text-align: left;
  padding: 24px 32px;

  background-repeat: no-repeat;
  background-size: cover, cover, cover;
  background-position: center, center, center;
`

export const TextBanner = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 32px;
  line-height: 100%;
  color: ${cores.branco};
  display: block;
  margin-bottom: 156px;
`

export const RestaurantName = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  color: ${cores.branco};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
`
