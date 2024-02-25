
import React, { useState } from 'react';
import classes from './Login.module.css'; // Import your CSS module
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:4000/api/${isLogin ? 'loginuser' : 'createuser'}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });

    const json = await response.json();

    if (!json.success) {
      setError(getErrorMessage(json));
    }else{
      setError('');
      localStorage.setItem('userEmail', credentials.email);
      localStorage.setItem('authToken', json.authToken);
      navigate('/');
    }
  };


  const getErrorMessage = (json) => {
    if (json.errors && json.errors.length > 0) {
      return json.errors[0].msg; // Display the first error message
    }

    // Custom error messages based on your validation logic
    if (json.errorCode === 'INVALID_EMAIL') {
      return 'Invalid email. Please enter a valid email address.';
    }

    if (json.errorCode === 'WEAK_PASSWORD') {
      return 'Weak password. Please use a stronger password.';
    }

    // Add more custom error messages as needed...

    // Default error message if none of the specific cases match
    return 'Invalid credentials';
  };

  const switchFormHandler = () => {
    setIsLogin((prevState) => !prevState);
    setError('')
  };

  const changeHandler = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className={classes.body}>
      <div className={`${classes.container} ${isLogin ? '' : classes.active}`}>
        <div className={`${classes['form-container']} ${isLogin ? classes['sign-in'] : classes['sign-up']}`}>
          <form onSubmit={handleSubmit}>
            <h1>{isLogin ? 'Sign In' : 'Create Account'}</h1>
            {!isLogin && (
              <>
                <div className={classes['social-icons']}>
                  <NavLink to="#" className={classes.icon}>
                    <i className="fa-brands fa-google-plus-g"></i>
                  </NavLink>
                  <NavLink to="#" className={classes.icon}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </NavLink>
                  <NavLink to="#" className={classes.icon}>
                    <i className="fa-brands fa-github"></i>
                  </NavLink>
                  <NavLink to="#" className={classes.icon}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </NavLink>
                </div>
                <span>OR</span>
                {/* <input type="text" placeholder="Name" name="name" onChange={changeHandler} /> */}
                <input type="text" placeholder="Name" name="name" onChange={changeHandler} />
                {/* <input type="email" placeholder="Email" name="email" onChange={changeHandler} /> */}
                <input type="text" placeholder="Username" name="username" onChange={changeHandler} />
                {/* <input type="password" placeholder="Password" name="password" onChange={changeHandler} /> */}
              </>
            )}
            {/* <div className={classes['input-group']}> */}
              <input className={classes.input} type="email" name="email" placeholder='Email' onChange={changeHandler} />
              {error && <p className={classes.error}>{error}</p>}
              {/* <label className={classes.label} htmlFor='email'>Email</label> */}
            {/* </div> */}
            {/* <div className={classes['input-group']}> */}
              <input type="password" placeholder="Password" name="password" onChange={changeHandler} />
              {error && <p className={classes.error}>{error}</p>}
              {/* <label className={classes.label} htmlFor='email'>Password</label> */}
            {/* </div > */}

            <button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</button>

          </form>
        </div>
        <div className={classes['toggle-container']}>
          <div className={classes.toggle}>
            <div className={`${classes['toggle-panel']} ${classes['toggle-left']}`}>
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className={classes.hidden} onClick={switchFormHandler}>
                Sign In
              </button>
            </div>
            <div className={`${classes['toggle-panel']} ${classes['toggle-right']}`}>
              <h1>Welcome, Friend!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className={classes.hidden} onClick={switchFormHandler}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
