import { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from './cartContextAPI/CartContext'
// import defaultCartState from './cartContextAPI/CartProvider'
import CartItem from './Cartitem'
const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const cartItemAddHandler = item => {
        cartCtx.addItem(item)
        console.log("added" , item)
     }
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
     }
    const totalAmount = cartCtx.totalAmount
    const hasItems = cartCtx.items.length > 0
    const cartItems =
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) =>{
                console.log({item})
                
                return (
                // <li>{item.title}</li>))}
                <CartItem
                    key={item.id}
                    price={item.price}
                    title={item.title}
                    amount={item.amount}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)} />
            )})}
            
        </ul>
    
    const orderHandler = (e) =>{
        console.log(e);
        alert('Your order is placed successfully')
        // defaultCartState()
    }
    
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount </span>
                <span>₹{totalAmount}</span>

            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button} onClick={(e)=>{
                    orderHandler();
                    window.location.reload();
                }}>Order</button>}

            </div>
        </Modal>
    )
}
export default Cart