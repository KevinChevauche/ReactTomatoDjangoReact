import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[34vw] m-[30px] bg-[url("/header_img.png")] bg-contain relative bg-no-repeat'>
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] fade-in">
        <h2 className="font-medium text-white text-[4.5vw]">Order your favourite food here</h2>
        <p className="text-[1vw] text-white">Choose from a divers menu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur illum enim magnam ullam fugiat aliquam mollitia debitis doloribus provident nulla doloremque temporibus in nemo quia, consequuntur libero nisi aut natus?</p>
        <button className="border-none text-[#747474] font-medium px-[2.3vw] py-[1vw] bg-white text-[max(1vw,13px)] rounded-[50px]">View Menu</button>
      </div>
    </div>
  )
}

export default Header
