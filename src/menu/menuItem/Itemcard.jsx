import { useContext } from 'react'
import classes from './Itemcard.module.css'
import './Itemcarddata'
import CartContext from '../../cart/cartContextAPI/CartContext'
const ItemCard = (props) => {
    const cartCtx = useContext(CartContext)
    const itemHandler = amount =>{
        cartCtx.addItem({
            id:props.id,
            title :props.title,
            price : props.price,
            amount : amount})
    }
    return (
        <div className={classes.divmain}>
            <div className={classes.container}>
                <div className={classes.box} id={classes.box1}>
                    <h3>{props.title}</h3>
                    <h4>₹{props.price}</h4>
                    <p> {props.info}</p>
                </div>
                <div className={classes.box} id={classes.box2}>
                    
                    <img src={props.imgsrc} alt="img" />
                    
                    <button className={classes.button} onClick={itemHandler}><b>+</b> Add</button>
                </div>
            </div>
            <div className={classes.line}></div>
        </div>
    )
}
export default ItemCard