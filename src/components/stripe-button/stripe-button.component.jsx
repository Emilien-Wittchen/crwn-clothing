import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JUYUABtDW7uWdilj9X3TxTGtEsr2IoKRgXM7rVvmiuRiz4DbAeloWTNJa86PXNEcNM4tdd8cr59w3S690obpDWE00hMAtTr9N';

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful!');
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
