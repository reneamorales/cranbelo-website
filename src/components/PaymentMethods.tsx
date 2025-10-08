import {PaymentCardCredit, PaymentCardDebit, PaymentMoney}  from '../icons/Payments';

export const PaymentMethods = () => {
  return (
    <section className='section'>
            <h2 className="text-semantic-info-bold h2">Métodos de Pago</h2>

            <div className='container gap spacing-large'>
                <div className="methods spacing-medium">
                    <PaymentCardCredit />
                    <p className="font-bold text-base leading-lh-base md:text-lg md:leading-lh-lg xl:text-xl xl:leading-lh-xl">Crédito</p>
                    <p className="text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-lg">Dividí tu pago en cómodas cuotas con tu tarjeta de crédito. Podrás acceder a nuestros cursos ahora y abonar en cuotas mensuales. Aceptamos las principales tarjetas de crédito y te ofrecemos diferentes planes de financiación.</p>
                </div>
                <div className="methods spacing-medium">
                    <PaymentCardDebit />
                    <p className="font-bold text-base leading-lh-base md:text-lg md:leading-lh-lg xl:text-xl xl:leading-lh-xl">Débito</p>
                    <p className="text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-lg">Dividí tu pago en cómodas cuotas con tu tarjeta de crédito. Podrás acceder a nuestros cursos ahora y abonar en cuotas mensuales. Aceptamos las principales tarjetas de crédito y te ofrecemos diferentes planes de financiación.</p>
                </div>
                <div className="methods spacing-medium">
                    <PaymentMoney />
                    <p className="font-bold text-base leading-lh-base md:text-lg md:leading-lh-lg xl:text-xl xl:leading-lh-xl">Depósito</p>
                    <p className="text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-lg">Dividí tu pago en cómodas cuotas con tu tarjeta de crédito. Podrás acceder a nuestros cursos ahora y abonar en cuotas mensuales. Aceptamos las principales tarjetas de crédito y te ofrecemos diferentes planes de financiación.</p>
                </div>
            </div>
        </section>
  )
}
