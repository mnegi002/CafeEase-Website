// import ItemCard from "./menuItem/Itemcard"
import classes from './Menu.module.css'
// import Menudata from './Menudata'
// import MenuCard from "./Menucard"
import ItemcardData from './menuItem/Itemcarddata'
import ItemCard from './menuItem/Itemcard'
import Cart from '../cart/Cart'
import { useState } from 'react'

const Menu = () => {

    return (
        <>

            {/* <h1>Menu</h1> */}
            {/* <ItemCard/> */}
            {/* <div className={classes.menucontainer}>
                {Menudata.map((val, ind) => {
                    return <MenuCard key={ind}
                        imgsrc_1={val.imgsrc_1}
                        imgsrc_2={val.imgsrc_2}
                        imgsrc_3={val.imgsrc_3}
                        // imgsrc_4={val.imgsrc_4}
                        // imgsrc_5={val.imgsrc_5}
                        // imgsrc_6={val.imgsrc_6}
                        // imgsrc_7={val.imgsrc_7}
                        // imgsrc_8={val.imgsrc_8}
                        // imgsrc_9={val.imgsrc_9}
                        title={val.title} />;
                })}
            </div>
             */}

    {ItemcardData.map((section, index) => (
      <div key={index}>
        <h2 className={classes.menuhead}>{section.name}</h2>
        
          {section.items.map((item, itemIndex) => (
            <ItemCard
            key={itemIndex}
            // itemIndex = {item.id}
            title = {item.title}
            price = {item.price}
            info = {item.info}
            imgsrc = {item.imgsrc}
            />
          ))}
        
      </div>
    ))}
    
  
        </>
    )
}
export default Menu