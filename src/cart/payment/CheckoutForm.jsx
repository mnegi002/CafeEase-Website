// import React from 'react'
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import classes from '../Cart.module.css'


// export default function CheckoutForm() {
//     const stripe = useStripe()
//     const elements = useElements()
    

//     const orderHandler = async () => {
//         if (!stripe || !elements) {
//             return;
//         }

//         try {
//             const {paymentIntent} = await paymentIntent('sk_test_51OkLUZSGFkTftsaBay7P36Yqg7wRZ8vomsRVwSeeAgkUJ6rnWYrUtXdDZpZ6JPX36xZGsaMe5QwIThR1rq4Du0He0021ls8QqO')
//             const result = await stripe.confirmCardPayment(paymentIntent.client_secret, {
//                 payment_method: {
//                   card: elements.getElement(CardElement),
//                 },
//               })
//             if (result.error) {
//                 // Handle payment error
//                 console.error(result.error.message);
//               } else {
//                 // Payment successful, update the state
//                 orderHandler();
//               }
//         } catch (error) {
//             console.error('Error placing order:', error);
//         }
//     };
//     return (
//         <>
//         <button className={classes.button} onClick={orderHandler}>  </button>
//             </>
//     )
// }
