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
                        <li><NavLink className={classes.listItem} to="order" style={({ isActive }) => ({
                            borderBottom: isActive ? '2px solid rgb(228, 93, 44)' : 'none',
                            borderBottomWidth: isActive ? 'medium' : 'none'
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