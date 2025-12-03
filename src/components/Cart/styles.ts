import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import close from '../../assets/image/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.coral};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 40px 16px 0 16px;

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.beige};
    text-align: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.beige};
  margin-bottom: 24px;
  margin-top: 16px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  .span {
    color: ${colors.beige};
  }
`
export const CartItemStyle = styled.li`
  display: flex;
  gap: 16px;
  padding: 8px;
  position: relative;
  background-color: ${colors.beige};
  margin: 8px 0;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    color: ${colors.coral};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${colors.coral};
    font-size: 14px;
  }

  button {
    position: absolute;
    background-image: url(${close});
    background-color: ${colors.beige};
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    bottom: 8px;
    right: 8px;
  }
`
export const Botao = styled.button`
  width: 100%;
  padding: 4px;
  border: none;
  background-color: ${colors.beige};
  color: ${colors.coral};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
`
