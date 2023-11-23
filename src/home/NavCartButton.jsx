import { useContext } from 'react'
import classes from './NavCartButton.module.css'
import CartContext from '../cart/cartContextAPI/CartContext'
const CartButton = (props) => {
    const cartCtx = useContext(CartContext)
    const numOfCartItems = cartCtx.items.reduce((curNumber , item )=>{
        return curNumber + item.amount
    },0)
    return (
        <>
            <div className={classes.cartlogo} onClick={props.onClick} >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className={classes.cartspan}>{numOfCartItems}</span>
            </div>
        </>
    )
}
export default CartButton