import { NavLink, Outlet } from "react-router-dom"
import classes from './Navbar.module.css'
import { useState } from "react"
import Cart from "../cart/Cart"
import CartButton from "./NavCartButton"
import Logout from "./Logout"


const Navbar = () => {
    const [cartShow, setCartShow] = useState(false)
    
    // const[isLoggedIn , setIsLoggedIn ] = useState(false)
    const showHandler = () => {
        setCartShow(true)
    }
    const hideHandler = () => {
        setCartShow(false)
    }
    // const loginHandler = ()=>{
    //     setIsLoggedIn(true)
    // }
    

    return (
        <>
    
            {cartShow && <Cart onClose={hideHandler} />}
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
                             color : isActive ? 'white' : '' ,
                            //  transform : isActive ? "color 1s fade-in-out" : '' ,
                        })}>Home</NavLink></li>
                        <li><NavLink className={classes.listItem} to="menu" style={({ isActive }) => ({
                             color : isActive ? 'white' : '' ,
                            //  transform : isActive ? "color 1s fade-in-out" : '' ,
                        })}>Menu</NavLink></li>
                        <li><NavLink className={classes.listItem} to="contact" style={({ isActive }) => ({
                             color : isActive ? 'white' : ' ' ,
                            //  transition : isActive ? ' color 0.3s ease-in-out, color 0.3s ease-in-out' : '' ,
                        })}>Contact</NavLink></li>
                        <li><NavLink className={classes.listItem} to="order" style={({ isActive }) => ({
                            
                            color : isActive ? 'white' : '' ,
                            // transform : isActive ? "color 1s fade-in-out" : '' ,
                        })}>My Orders</NavLink></li>
                    </ul>
                </div>
                <CartButton onClick={showHandler} />
                <Logout />


            </div>
            <Outlet />
        </>
    )
}
export default Navbar