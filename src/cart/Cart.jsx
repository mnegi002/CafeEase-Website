import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
const Cart = (props)=>{
    return (
        <Modal>
            <CartItem/>
            <div className={classes.total }>
                <span>Total Amount </span>
                <span>40</span>

            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>

            </div>
        </Modal>
    )
}
export default Cart