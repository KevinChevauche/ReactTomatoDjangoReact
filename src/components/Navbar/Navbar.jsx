import React, { useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='padding-20px 0px flex justify-around items-center'>
      <img src={assets.logo} alt="" className='w-[150px]' />
      <ul className='flex list-none gap-[20px] text-[#495557] text-[18px]'>
        <li 
          onClick={() => setMenu("home")} 
          className={`pb-2 cursor-pointer ${menu === "home" ? "border-b-2 border-red-500" : ""}`}
        >
          home
        </li>
        <li 
          onClick={() => setMenu("menu")} 
          className={`pb-2 cursor-pointer ${menu === "menu" ? "border-b-2 border-red-500" : ""}`}
        >
          menu
        </li>
        <li 
          onClick={() => setMenu("mobile-app")} 
          className={`pb-2 cursor-pointer ${menu === "mobile-app" ? "border-b-2 border-red-500" : ""}`}
        >
          mobile-app
        </li>
        <li 
          onClick={() => setMenu("contact-us")} 
          className={`pb-2 cursor-pointer ${menu === "contact-us" ? "border-b-2 border-red-500" : ""}`}
        >
          contact us
        </li>
      </ul>
      <div className='flex items-center gap-[40px]'>
        <img src={assets.search_icon} alt="" className='relative min-h-[10px] min-w-[10px]'/>
        <div className="relative w-fit h-fit">
            <img src={assets.basket_icon} alt="" />
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 min-w-[10px] min-h-[10px] bg-[tomato] rounded-full"></div>
        </div>
        <button className="bg-transparent text-[15px] rounded-[50px] border border-red-500 px-6 py-2 cursor-pointer hover:bg-[#fff4f2] transition duration-500">
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;