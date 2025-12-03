import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`

export const Sidebar = styled.div`
  background: ${colors.coral};
  width: 360px;
  padding: 8px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  overflow-y: auto;

  h2 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.beige};
    margin-top: 32px;
  }
`

export const CartContainer = styled.div`
  padding: 0;

  margin-bottom: 8px;
  background: ${colors.coral};
  color: ${colors.beige};
`
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`
export const RowInlineCard = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr;
  gap: 32px;
`

export const RowInline = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  display: flex;
  flex-direction: column;

  max-width: ${(props) => props.maxWidth || ' auto'};

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
    padding: 8px;
    color: ${colors.beige};
  }

  input {
    background-color: ${colors.beige};
    border: 1px solid ${colors.beige};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    font-size: 14px;
    color: ${colors.darkGray};
  }

  .error {
    border: 3px solid red;
  }
`
export const Botao = styled.button`
  background: ${colors.beige};
  color: ${colors.coral};
  border: none;
  padding: 0;
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  height: 24px;
  cursor: pointer;
`
export const TextConfirmation = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.beige};
  margin-top: 16px;
  margin-bottom: 24px;
  width: 100%;
  white-space: pre-line;
`
