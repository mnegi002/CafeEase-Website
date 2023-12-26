// import ItemCard from "./menuItem/Itemcard"
import classes from './Menu.module.css'
// import Menudata from './Menudata'
// import MenuCard from "./Menucard"
import ItemcardData from './menuItem/Itemcarddata'
import ItemCard from './menuItem/Itemcard'
import Carousel from './menuItem/Carousel'
// import Cart from '../cart/Cart'
// import { useContext, useState } from 'react'
// import CartContext from '../cart/cartContextAPI/CartContext'

const Menu = (props) => {
  console.log(ItemcardData)
  
    return (
        

          
    <div className={classes.menucontainer}>

    {ItemcardData.map((section, index) => (
      <div key={index}>
        <h2 className={classes.menuhead}>{section.name}</h2>
        
          {section.items.map((item, itemIndex) => (
            <ItemCard
            // onAddToCart={addToCartHandler}
            key={itemIndex}
            id = {item.id}
            // itemIndex = {item.id}
            title = {item.title}
            price = {item.price}
            info = {item.info}
            imgsrc = {item.imgsrc}
            />
          ))}
        
      </div>
    ))}
    </div>
    
    )

}
export default Menu