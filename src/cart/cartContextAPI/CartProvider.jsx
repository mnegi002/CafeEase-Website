import { useReducer } from "react"
import CartContext from "./CartContext"

export const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        // console.log("action", action.item.price)

        // console.log(updatedItems)
        const updatedTotalAmount = state.totalAmount + action.item.price;
        // console.log({updatedTotalAmount})
        const existingCartIndex = state.items.findIndex((item) => item.id === action.item.id)
        // console.log({existingCartIndex})
        const existingCartItem = state.items[existingCartIndex]
        // console.log({existingCartItem})
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + 1
            }
            updatedItems = [...state.items]
            updatedItems[existingCartIndex] = updatedItem
            console.log("amount", updatedItems)
            // console.log(updatedItems)
        } else {
            // console.log("New Item")
            updatedItems = state.items.concat(action.item)
        }

        // console.log({updatedItems})
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    // console.log(state.totalAmount)
    // console.log(updatedTotalAmount)
    // console.log(action.item.id)


    if (action.type === 'REMOVE') {
        const existingCartIndex = state.items.findIndex((item) => item.id === action.id)
        // console.log({existingCartIndex})
        const existingItem = state.items[existingCartIndex]
        // console.log({existingCartItem})
        const updatedTotalAmount = state.totalAmount - existingItem.price
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[existingCartIndex] = updatedItem
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }


    return defaultCartState
}
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemHandler = (item) => {
        // console.log("THE ITEM", item)
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    }
    const removeItemHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider