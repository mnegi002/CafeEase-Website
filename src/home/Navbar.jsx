import { NavLink, Outlet } from "react-router-dom"
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <>
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
                <div className={classes.cartlogo}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span className={classes.cartspan}>5</span>
                </div>
                <div className={classes.navlog}>
                    <button className={classes.login}>Log In</button>
                    <button className={classes.signup}>Sign Up</button>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default Navbar