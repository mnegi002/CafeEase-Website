import { useReducer } from "react"
import CartContext from "./CartContext"

const defaultCartState = {
    items : [],
    totalAmount : 0
}
const cartReducer = (state,action)=>{
    if (action.type==='ADD'){
        const updatedItems = state.items.concat(action.item)
        // console.log(action.item)
        // console.log(updatedItems)
        const updatedTotalAmount = state.totalAmount + action.item.price 
        console.log(state.totalAmount)
        console.log(updatedTotalAmount)
        return {
            items : updatedItems,
            totalAmount : updatedTotalAmount
        }
    }
    return defaultCartState
}
const CartProvider = props =>{
    const [cartState , dispatchCartAction] = useReducer(cartReducer,defaultCartState)
    const addItemHandler = item => {
        dispatchCartAction({
            type:'ADD',
            item: item
        })
    }
    const removeItemHandler = id =>  {}
    const cartContext = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem : addItemHandler ,
        removeItem : removeItemHandler , 
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children }
        </CartContext.Provider>
    )
}
export default CartProvider