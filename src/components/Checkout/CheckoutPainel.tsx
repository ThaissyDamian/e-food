import { useState } from 'react'

import Delivery from './DeliveryStep'
import Payment from './PaymentStep'
import Confirmation from './Confirmation'

import { usePurchaseMutation } from '../../services/api'
import { getCheckoutTotalPrice } from '../../utils'

import { Overlay, Sidebar } from './styles'

type Props = {
  onClose: () => void
  onFinishOrder: () => void
  cartItems: { id: number; price: number }[]
}

type DeliveryFormData = {
  fullName: string
  address: string
  city: string
  cep: string
  number: string
  complement: string
}

type PaymentFormValues = {
  cardDisplayName: string
  cardNumber: string
  cardCode: string
  expiresMonth: string
  expiresYear: string
}

const CheckoutPainel = ({ onClose, onFinishOrder, cartItems }: Props) => {
  const [step, setStep] = useState<'delivery' | 'payment' | 'confirmation'>(
    'delivery'
  )
  const [deliveryData, setDeliveryData] = useState<DeliveryFormData | null>(
    null
  )

  const [purchase, { data, isLoading }] = usePurchaseMutation()

  const total = getCheckoutTotalPrice(cartItems)

  const handleDeliverySubmit = (values: DeliveryFormData) => {
    setDeliveryData(values)
    setStep('payment')
  }

  const handlePaymentSubmit = async (values: PaymentFormValues) => {
    if (!deliveryData) return

    const payload = {
      products: cartItems.map((item) => ({
        id: item.id,
        price: item.price
      })),
      delivery: {
        receiver: deliveryData.fullName,
        address: {
          description: deliveryData.address,
          city: deliveryData.city,
          zipCode: deliveryData.cep,
          number: Number(deliveryData.number),
          complement: deliveryData.complement
        }
      },
      payment: {
        card: {
          name: values.cardDisplayName,
          number: values.cardNumber,
          code: Number(values.cardCode),
          expires: {
            month: Number(values.expiresMonth),
            year: Number(values.expiresYear)
          }
        }
      }
    }

    try {
      await purchase(payload).unwrap()
      setStep('confirmation')
    } catch (error) {
      console.error('Erro ao finalizar compra:', error)
    }
  }

  return (
    <Overlay>
      <Sidebar>
        {step === 'delivery' && (
          <Delivery onSubmit={handleDeliverySubmit} onBack={onClose} />
        )}

        {step === 'payment' && (
          <Payment
            onSubmit={handlePaymentSubmit}
            onBack={() => setStep('delivery')}
            isLoading={isLoading}
            total={total}
          />
        )}

        {step === 'confirmation' && (
          <Confirmation data={data} onBack={onFinishOrder} />
        )}
      </Sidebar>
    </Overlay>
  )
}

export default CheckoutPainel
