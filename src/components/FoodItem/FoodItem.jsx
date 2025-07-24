import React, { useContext } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';



const { cartItems,addToCart,removeFromCart } = useContext(StoreContext);
    const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div
      className="w-full mx-auto rounded-[15px] shadow-[0px_0px_10px_#00000015] transition duration-300 animate-fadeIn"
      id="food-item"
    >
      <div id="food-item-img-container" className='relative'>
        <img
          src={image}
          alt={name}
          className="w-full rounded-t-[15px]"
        />
        {!itemCount 
            ?<img onClick={()=>addToCart(id)}src={assets.add_icon_white}/>
            :<div>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div id="food-item-info" className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className=" text-lg size-4 font-medium">{name}</p>
          <img src={assets.rating_starts} alt="rating" className="h-4 w-[70px]" />
        </div>
      </div>
      <p id="food-item-desc" className="px-3 text-gray-600 text-sm size-[12px]">
        {description}
      </p>
      <p id="food-item-price" className="text-[22px] font-medium my-[10px] text-[tomato]">
        ${price}
      </p>
    </div>
  );
};

export default FoodItem;