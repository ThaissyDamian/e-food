import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import * as S from './styles'

type DeliveryFormValues = {
  fullName: string
  address: string
  city: string
  cep: string
  number: string
  complement: string
}

type Props = {
  onSubmit: (values: DeliveryFormValues) => void | Promise<void>
  onBack: () => void
}

const Delivery = ({ onBack, onSubmit }: Props) => {
  const formDelivery = useFormik<DeliveryFormValues>({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .matches(/^[A-Za-zÀ-ÿ\s]+$/, 'O nome não pode conter números')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(10, 'O campo deve ter pelo menos 10 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O campo deve ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo deve ter pelo menos 9 caracteres')
        .max(9, 'O campo deve ter pelo menos 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(2, 'O campo deve ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string().max(50, 'Complemento muito longo')
    }),
    onSubmit: async (values) => {
      await onSubmit(values)
    }
  })

  const getErrorMessage = (fieldName: keyof DeliveryFormValues) => {
    const isTouched = formDelivery.touched[fieldName]
    const error = formDelivery.errors[fieldName]
    return isTouched && error ? error : ''
  }

  return (
    <form onSubmit={formDelivery.handleSubmit}>
      <S.CartContainer>
        <h2>Entrega</h2>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formDelivery.values.fullName}
              onChange={formDelivery.handleChange}
              onBlur={formDelivery.handleBlur}
              className={getErrorMessage('fullName') ? 'error' : ''}
            />
            <small>{getErrorMessage('fullName')}</small>
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              type="text"
              name="address"
              value={formDelivery.values.address}
              onChange={formDelivery.handleChange}
              onBlur={formDelivery.handleBlur}
              className={getErrorMessage('address') ? 'error' : ''}
            />
            <small>{getErrorMessage('address')}</small>
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={formDelivery.values.city}
              onChange={formDelivery.handleChange}
              onBlur={formDelivery.handleBlur}
              className={getErrorMessage('city') ? 'error' : ''}
            />
            <small>{getErrorMessage('city')}</small>
          </S.InputGroup>
        </S.Row>

        <S.RowInline>
          <S.InputGroup>
            <label htmlFor="cep">CEP</label>
            <InputMask
              id="cep"
              type="text"
              name="cep"
              value={formDelivery.values.cep}
              onChange={formDelivery.handleChange}
              onBlur={formDelivery.handleBlur}
              className={getErrorMessage('cep') ? 'error' : ''}
              mask="99999-999"
            />
            <small>{getErrorMessage('cep')}</small>
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              type="text"
              name="number"
              value={formDelivery.values.number}
              onChange={formDelivery.handleChange}
              onBlur={formDelivery.handleBlur}
              className={getErrorMessage('number') ? 'error' : ''}
            />
            <small>{getErrorMessage('number')}</small>
          </S.InputGroup>
        </S.RowInline>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              type="text"
              name="complement"
              value={formDelivery.values.complement}
              onChange={formDelivery.handleChange}
              onBlur={formDelivery.handleBlur}
              className={getErrorMessage('complement') ? 'error' : ''}
            />
            <small>{getErrorMessage('complement')}</small>
          </S.InputGroup>
        </S.Row>
      </S.CartContainer>

      <div>
        <S.Botao type="submit">Continuar com o pagamento</S.Botao>
        <S.Botao type="button" onClick={onBack}>
          Voltar para o carrinho
        </S.Botao>
      </div>
    </form>
  )
}

export default Delivery
