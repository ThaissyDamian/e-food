import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { parseToBrl } from '../../utils'

import * as S from './styles'
type PaymentFormValues = {
  cardDisplayName: string
  cardNumber: string
  cardCode: string
  expiresMonth: string
  expiresYear: string
}

type Props = {
  onSubmit: (values: PaymentFormValues) => void | Promise<void>
  onBack: () => void
  isLoading: boolean
  total: number
}

const Payment = ({ onBack, onSubmit, isLoading, total }: Props) => {
  const formPayment = useFormik<PaymentFormValues>({
    initialValues: {
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardDisplayName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .matches(/^(?:\d\s*){16}$/, 'Número do cartão deve ter 16 dígitos')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .matches(/^\d{3}$/, 'CVV deve ter 3 dígitos')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .matches(/^\d{2}$/, 'Ano inválido')
        .required('O campo é obrigatório')
    }),
    onSubmit: async (values) => {
      await onSubmit(values)
    }
  })

  const getErrorMessage = (fieldName: keyof PaymentFormValues) => {
    const isTouched = formPayment.touched[fieldName]
    const error = formPayment.errors[fieldName]
    return isTouched && error ? error : ''
  }

  return (
    <form onSubmit={formPayment.handleSubmit}>
      <S.CartContainer>
        <h2>Pagamento - Valor a pagar {parseToBrl(total)}</h2>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="cardDisplayName">Nome no cartão</label>
            <input
              id="cardDisplayName"
              type="text"
              name="cardDisplayName"
              value={formPayment.values.cardDisplayName}
              onChange={formPayment.handleChange}
              onBlur={formPayment.handleBlur}
              className={getErrorMessage('cardDisplayName') ? 'error' : ''}
            />
            <small>{getErrorMessage('cardDisplayName')}</small>
          </S.InputGroup>
        </S.Row>

        <S.RowInlineCard>
          <S.InputGroup maxWidth="250px">
            <label htmlFor="cardNumber">Número do cartão</label>
            <InputMask
              id="cardNumber"
              type="text"
              name="cardNumber"
              value={formPayment.values.cardNumber}
              onChange={formPayment.handleChange}
              onBlur={formPayment.handleBlur}
              className={getErrorMessage('cardNumber') ? 'error' : ''}
              mask="9999 9999 9999 9999"
            />
            <small>{getErrorMessage('cardNumber')}</small>
          </S.InputGroup>

          <S.InputGroup maxWidth="86px">
            <label htmlFor="cardCode">CVV</label>
            <InputMask
              id="cardCode"
              type="text"
              name="cardCode"
              value={formPayment.values.cardCode}
              onChange={formPayment.handleChange}
              onBlur={formPayment.handleBlur}
              className={getErrorMessage('cardCode') ? 'error' : ''}
              mask="999"
            />
            <small>{getErrorMessage('cardCode')}</small>
          </S.InputGroup>
        </S.RowInlineCard>

        <S.RowInline>
          <S.InputGroup maxWidth="156px">
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <InputMask
              id="expiresMonth"
              type="text"
              name="expiresMonth"
              value={formPayment.values.expiresMonth}
              onChange={formPayment.handleChange}
              onBlur={formPayment.handleBlur}
              className={getErrorMessage('expiresMonth') ? 'error' : ''}
              mask="99"
            />
            <small>{getErrorMessage('expiresMonth')}</small>
          </S.InputGroup>

          <S.InputGroup maxWidth="156px">
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <InputMask
              id="expiresYear"
              type="text"
              name="expiresYear"
              value={formPayment.values.expiresYear}
              onChange={formPayment.handleChange}
              onBlur={formPayment.handleBlur}
              className={getErrorMessage('expiresYear') ? 'error' : ''}
              mask="99"
            />
            <small>{getErrorMessage('expiresYear')}</small>
          </S.InputGroup>
        </S.RowInline>
      </S.CartContainer>

      <S.Botao type="submit" disabled={isLoading}>
        {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
      </S.Botao>

      <S.Botao type="button" onClick={onBack} disabled={isLoading}>
        Voltar para a edição de endereço
      </S.Botao>
    </form>
  )
}

export default Payment
