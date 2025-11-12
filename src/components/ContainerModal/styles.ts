import styled from 'styled-components'
import { cores } from '../../styles'

export const CardModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1024px;
  height: 344px;
  background-color: ${cores.coral};
  color: ${cores.branco};
  padding: 32px;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    img {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }

  button {
    background-color: ${cores.bege};
    color: ${cores.coral};
    font-weight: bold;
    border: none;
    padding: 4px 8px;
    cursor: pointer;
  }
`

export const ContainerIterno = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.branco};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    color: ${cores.branco};
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
