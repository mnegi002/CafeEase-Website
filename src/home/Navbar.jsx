import { NavLink, Outlet , useNavigate } from "react-router-dom"
import classes from './Navbar.module.css'
import { useState } from "react"
import Cart from "../cart/Cart"
import CartButton from "./NavCartButton"

const Navbar = () => {
    const[cartShow,setCartShow] = useState(false)
    // const[isLoggedIn , setIsLoggedIn ] = useState(false)
    const showHandler = () =>{
      setCartShow(true)
    }
    const hideHandler = () =>{
      setCartShow(false)
    }
    const Navigate = useNavigate()
    // const loginHandler = ()=>{
    //     setIsLoggedIn(true)
    // }
    const logoutHandler = () =>{
        localStorage.removeItem("authToken")
        Navigate("/login")
    }

    return (
        <>
        
            {cartShow && <Cart onClose={hideHandler}/>}
            <div className={classes.navdiv}>
                <div className={classes.logodiv}>
                    <NavLink className={classes.navlink} to="/">
                        <h2 className={classes.h2}>
                            Cafe<span className={classes.span}>Ease</span>
                        </h2>
                    </NavLink>
                </div>
                <div className={classes.listdiv}>
                    <ul className={classes.list}>
                        <li><NavLink className={classes.listItem} to="/" style={({ isActive }) => ({
                            borderBottom: isActive ? '2px solid rgb(228, 93, 44)' : 'none',
                            borderBottomWidth: isActive ? 'medium' : 'none'
                        })}>Home</NavLink></li>
                        <li><NavLink className={classes.listItem} to="menu" style={({ isActive }) => ({
                            borderBottom: isActive ? '2px solid rgb(228, 93, 44)' : 'none',
                            borderBottomWidth: isActive ? 'medium' : 'none'
                        })}>Menu</NavLink></li>
                        <li><NavLink className={classes.listItem} to="contact" style={({ isActive }) => ({
                            borderBottom: isActive ? '2px solid rgb(228, 93, 44)' : 'none',
                            borderBottomWidth: isActive ? 'medium' : 'none'
                        })}>Contact</NavLink></li>
                    </ul>
                </div>
                <CartButton onClick={showHandler}/>
                {/* <div className={classes.navlog}>
                    <button className={classes.login}>Log In</button>
                    <button className={classes.signup}>Sign Up</button>
                </div> */}
                
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

                
                
                        

                

            </div>
            <Outlet />
        </>
    )
}
export default Navbar