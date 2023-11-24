import { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from './cartContextAPI/CartContext'
import CartItem from './Cartitem'
const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const cartItemAddHandler = item => { }
    const cartItemRemoveHandler = id => { }
    const totalAmount = cartCtx.totalAmount
    const hasItems = cartCtx.items.length > 0
    const cartItems =
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                // <li>{item.title}</li>))}
                // console.log(item)
                <CartItem
                    key={item.id}
                    price={item.price}
                    title={item.title}
                    amount={item.amount.detail}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)} />
            ))}
            
        </ul>
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount </span>
                <span>₹{totalAmount}</span>

            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}

            </div>
        </Modal>
    )
}
export default Cart