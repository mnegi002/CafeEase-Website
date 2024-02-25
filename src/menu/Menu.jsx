// import ItemCard from "./menuItem/Itemcard"
import classes from './Menu.module.css'
// import MenuCard from "./Menucard"
import ItemcardData from './menuItem/Itemcarddata'
import ItemCard from './menuItem/Itemcard'
import { useState } from 'react'

const Menu = () => {
  const [searchTerm , setSearchTerm] = useState('')
  const [filteredItems, setFilteredItems] = useState(ItemcardData);
  // const handleSearch = () =>{
  //     onSearch(searchTerm)
  // }

  const handleSearch = (query) => {
    setSearchTerm(query);
  
    const filteredResults = ItemcardData.reduce((accumulator, section) => {
      const filteredItems = section.items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase().trim())
      );
   
      if (filteredItems.length > 0) {
        accumulator.push({ ...section, items: filteredItems });
      }
  
      return accumulator;
    }, []);
  
    setFilteredItems(filteredResults);
  };
  
    return (
        

          
    <div className={classes.menucontainer}>
    <div>
        <input 
        type="search"
        placeholder='search for food' 
        onChange={(e)=> handleSearch(e.target.value)}
        value={searchTerm}
        // onClick={handleSearch}
        />
        
    </div>
    {filteredItems.map((section, index) => (
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