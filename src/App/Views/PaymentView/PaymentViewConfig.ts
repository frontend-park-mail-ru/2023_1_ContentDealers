interface IPaymentViewData {
    src:             string,
    description:     string,
}

const PaymentViewSuccessData: IPaymentViewData = {
    src: 'success.svg',
    description: 'В Течение нескольких минут подписка будет применена на сайте'
}

const PaymentViewFailureData: IPaymentViewData = {
    src: 'failure.svg',
    description: 'К сожалению, оплата не прошла. Повторите позже'
}

export { PaymentViewSuccessData, PaymentViewFailureData };
