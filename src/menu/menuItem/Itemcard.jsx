import classes from './Itemcard.module.css'
import './Itemcarddata'
const ItemCard = (props) => {
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
                    
                    <button className={classes.button}><b>+</b> Add</button>
                </div>
            </div>
            <div className={classes.line}></div>
        </div>
    )
}
export default ItemCard