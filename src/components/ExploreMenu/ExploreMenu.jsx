import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category,setCategory}) => {


  return (
    <div className='flex flex-col gap-5 px-10 m-10' id='explore-menu'>
      <h1 className="text-[#262626] font-medium text-4xl">Explore our menu</h1>
      <p className='max-w-[60%] text-gray-700 font-semibold'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum illum non laudantium repellat doloribus beatae magnam at hic. Itaque soluta beatae illo, dolore consectetur eligendi. Voluptas quisquam deserunt ipsam illo.
      </p>
      <div 
        id="explore-menu-liste" 
        className="flex justify-start items-center gap-7 my-5 overflow-x-auto"
        >
        {menu_list.map((item, index) => (
          <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="flex flex-col items-center flex-shrink-0">
            <img className={`w-64 h-auto rounded-md object-cover min-w-[80px] cursor-pointer duration-200 transition ${category === item.menu_name ? "active" : ""}`} src={item.menu_image} alt={item.menu_name}/>
            <p className="mt-2 text-center cursor-pointer text-[max(1.4vw,16px)] rounded-full">{item.menu_name}</p>
          </div>
        ))}
      </div>

      <style>{`
        #explore-menu-liste::-webkit-scrollbar {
          display: none;
        }
        #explore-menu-liste {
          scrollbar-width: none;
          -ms-overflow-style: none; /* IE et Edge */
        }
      `}</style>
    </div>
  )
}

export default ExploreMenu