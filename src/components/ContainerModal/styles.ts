import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
`

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 0;
`

export const CardModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1024px;
  height: 344px;
  background-color: ${cores.coral};
  color: ${cores.branco};
  padding: 32px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
