import React,{useState} from 'react'
import './signup.css'
import {useNavigate} from 'react-router-dom'


export default function Login() {
    const [credentials,setcredentials] = useState({email:"",password:""})
    let Navigate = useNavigate()
        const handleSubmit = async(e)=>{
            e.preventDefault();
            const response = await fetch("http://localhost:4000/api/loginuser",{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email:credentials.email,password:credentials.password})
            });
            const json = await response.json()
            console.log(json);

            if(!json.success){
                alert("Enter Valid Credentails")
            }

            if(json.success){
                localStorage.setItem("authToken",json.authToken);
                console.log(localStorage.getItem("authToken"))
                Navigate("/");
            }

        
        
    }
    const changeHandler = (event)=>{
            setcredentials({...credentials,[event.target.name]:event.target.value})


    }
  return (
    <div>
        <div className="signupcontainer">
  <div className="content">
    <img src="/images/cafeease-high-resolution-logo (1).png" alt="pin logo" className="img1" />

    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" className="detail" value={credentials.email} onChange={changeHandler}/><br />
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
      <a href="/createuser">Not on CafeEase? Sign Up</a>
    </footer>
  </div>
</div>
    </div>
  )
}
