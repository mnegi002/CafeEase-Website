import React, { useEffect } from 'react'

export default function Failed() {
  const delayInSeconds = 5 
    useEffect(() => {
        const redirectTimer = setTimeout(() => {
          // Redirect to your desired page after 5 seconds
          window.location.href = '/menu';
        }, delayInSeconds*1000);
    
        // Cleanup the timer on component unmount
        return () => clearTimeout(redirectTimer);
      }, []);
  return (
    <>
    <div>Uh no! you have cancelled the payment</div>
    <p>{`You will be redirected to menu in ${delayInSeconds} seconds` }</p>

    </>
    
  )
}
