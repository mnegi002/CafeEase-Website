import React , {useEffect} from 'react'

export default function Success() {
    const delayInSeconds = 5 
    useEffect(() => {
        const redirectTimer = setTimeout(() => {
          // Redirect to your desired page after 5 seconds
          window.location.href = '/order';
        }, delayInSeconds*1000);
    
        // Cleanup the timer on component unmount
        return () => clearTimeout(redirectTimer);
      }, []);
  return (

    <div>
        <h2>Your order has been placed successfully</h2>
        <p>{`You will be redirected to your order in ${delayInSeconds} seconds` }</p>
        </div>
  )
}
