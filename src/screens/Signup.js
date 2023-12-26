import React, { useState } from 'react'
import './signup.css'



export default function Signup() {

    const [credentials,setcredentials] = useState({name:"",email:"",password:"",username:""})
    
        const handleSubmit = async(e)=>{
            e.preventDefault();
            const response = await fetch("http://localhost:4000/api/createuser",{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name:credentials.name,email:credentials.email,username:credentials.username,password:credentials.password})
            });
            const json = await response.json()
            console.log(json);

            if(!json.success){
                alert("Enter Valid Credentails")
            }
        
        
    }
    const changeHandler = (event)=>{
            setcredentials({...credentials,[event.target.name]:event.target.value})


    }
  return (
    <>
    <div className="signupcontainer">
  <div className="content">
    <img src="/images/cafeease-high-resolution-logo (1).png" alt="pin logo" className="img1" />

    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" className="detail" value={credentials.email} onChange={changeHandler}/><br />
      <input type="text" name="username" placeholder="username" className="detail" value={credentials.username} onChange={changeHandler}/><br />
      <input type="text" name="name" placeholder="name" className="detail"  value={credentials.name} onChange={changeHandler}/><br/>
      <input type="password" name="password" placeholder="Password" className="detail" value={credentials.password} onChange={changeHandler}/>
      <button type="submit" className="btn int" value="Register Account" >Submit</button>
    </form>

    {/* <a href="/forgot">Forgot your password?</a>

    <p className="or">OR</p>
    <button className="btn fbk" style={{ color: 'white', paddingRight: '10px' }}>
      <i className="fab fa-facebook fa-lg"></i><a href="#">Continue with Facebook</a>
    </button><br />
    <button className="btn ggl" style={{ color: 'rgb(11, 241, 22)', paddingRight: '10px' }}>
      <i className="fab fa-google"></i><a href="#">Continue with Google</a>
    </button> */}

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

