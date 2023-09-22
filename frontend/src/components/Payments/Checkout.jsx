import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/logo.png'


function Checkout(){

  const onToken =(token) =>{
    console.log(token)
  }


  return (
    <div className="Checkout">
    <StripeCheckout
      token={onToken}
      name="Mind Talk"
      image={Logo}
      label="Pay Now"
      currency="LKR"
      amount={200000}
      stripeKey="pk_test_51Nrk0OSFDUE54MtAFhY0fKuF4xN7ecdMr9CIIp41qjbrKDGnYEvCc0TGgL0sgXDQ8CQ7Jg8wTRVal2GTo2OGRR1q00zw9XTipk"
    />
    </div>
  )
}

export default Checkout