import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';

const Home = () => {

  const [category,setCategory] = useState("ALL");

  return (
    <div className='w-full h-full px-8 relative align-center justify-center overflow-x-hidden'>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home