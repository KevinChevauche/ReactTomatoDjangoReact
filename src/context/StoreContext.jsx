import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});

    const addToCart = () => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=> ({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {...prev,[itemId]:prev[itemId] - 1})
    }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart
    }

    return (
        <StoreContextProvider value={contextValue}>
            {props.children}
        </StoreContextProvider>
    )
}

export default StoreContextProvider