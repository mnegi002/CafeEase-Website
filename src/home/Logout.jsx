import React from 'react'
import classes from './Navbar.module.css'
import { NavLink  , useNavigate} from 'react-router-dom'

export default function Logout() {
    const Navigate = useNavigate()

    const logoutHandler = () =>{
        localStorage.removeItem("authToken")
        Navigate("/login")
    }
  return (
    <>
    {(localStorage.getItem("authToken")) ?  (<div>
        <button onClick={logoutHandler}>Logout</button>
    </div>) : ( <div className={classes.navlog} >
    <NavLink className={classes.login} to="Login" style={({ isActive }) => ({
                borderBottom: isActive ? '2px solid rgb(228, 93, 44)' : 'none',
                borderBottomWidth: isActive ? 'medium' : 'none'
            })}>Login</NavLink>
    <NavLink className={classes.signup} to="createuser" style={({ isActive }) => ({
                borderBottom: isActive ? '2px solid rgb(228, 93, 44)' : 'none',
                borderBottomWidth: isActive ? 'medium' : 'none'
            })}>Sign In</NavLink>
    </div> ) }
    </>
  )
}
