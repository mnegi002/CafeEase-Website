import React, { useState } from 'react'
import './signup.css'

export default function Signup() {

    const [credentials,setcredentials] = useState({name:"",email:"",password:"",username:""})
    const handleSubmit = async() => {
        const handleSubmit = async(e)=>{
            e.preventDefault();
            const response = fetch("http://localhost:3000/createuser",{
                method: 'POST',
                header:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify()
            })
        }


    }
  return (
    <>
    <div className="signupcontainer">
  <div className="content">
    <img src="/images/cafeease-high-resolution-logo (1).png" alt="pin logo" className="img1" />

    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" className="detail" /><br />
      <input type="text" name="username" placeholder="username" className="detail" /><br />
      <input type="text" name="name" placeholder="name" className="detail" /><br />
      <input type="password" name="password" placeholder="Password" className="detail" />
      <input type="submit" className="btn int" value="Register Account" />
    </form>

    <a href="/forgot">Forgot your password?</a>

    <p className="or">OR</p>
    <button className="btn fbk" style={{ color: 'white', paddingRight: '10px' }}>
      <i className="fab fa-facebook fa-lg"></i><a href="#">Continue with Facebook</a>
    </button><br />
    <button className="btn ggl" style={{ color: 'rgb(11, 241, 22)', paddingRight: '10px' }}>
      <i className="fab fa-google"></i><a href="#">Continue with Google</a>
    </button>

    <footer>
      <p>
        By continuing, you agree to Pinterest's
        <b>Terms of Service, Privacy policy.</b>
      </p>
      <hr />
      <a href="/login">Already on CafeEase? Login In</a>
    </footer>
  </div>
</div>
    </>
    
  )
}

