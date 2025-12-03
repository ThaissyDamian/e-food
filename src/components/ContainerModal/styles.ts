import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

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
  background-color: ${colors.coral};
  color: ${colors.white};
  padding: 32px;
  overflow: hidden;

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
    height: auto;
    padding: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
    height: auto;
    padding: 16px;
  }

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

      @media (max-width: ${breakpoints.tablet}) {
        top: 8px;
        right: 8px;
      }
    }
  }

  button {
    background-color: ${colors.beige};
    color: ${colors.coral};
    font-weight: bold;
    border: none;
    padding: 4px 8px;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
      padding: 6px;
      width: 100%;
    }
  }
`

export const ContainerIterno = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    gap: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.desktop}) {
      width: 240px;
      height: 240px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 200px;
      height: 200px;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
      text-align: center;
    }
  }

  p {
    font-size: 14px;
    color: ${colors.white};
    line-height: 22px;
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 13px;
      text-align: center;
    }
  }
`
