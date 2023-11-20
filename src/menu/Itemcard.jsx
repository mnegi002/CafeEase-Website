import classes from './Itemcard.module.css'
const ItemCard = () => {
    return (
        <div className={classes.divmain}>
            <div className={classes.container}>
                <div className={classes.box} id={classes.box1}>
                    <h3>Rajma Chawal</h3>
                    <h4>₹200</h4>
                    <p> Classic Rajma Chawal dish cooked in tomato rich gravy</p>
                </div>
                <div className={classes.box} id={classes.box2}>
                    
                    <img src="/images/RajmaRice.jpg" alt="img" />
                    
                    <button className={classes.button} role="button">Add</button>
                </div>
            </div>
            <div className={classes.line}></div>
        </div>
    )
}
export default ItemCard