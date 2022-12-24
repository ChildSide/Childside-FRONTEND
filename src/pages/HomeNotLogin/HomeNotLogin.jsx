import React, { useContext } from 'react'
import Carousel from '../../components/carousel/Carousel'
import Counter from '../../components/counter/Counter'
import Navbar2 from '../../components/navbar2/navbar2'
import { DarkModeContext } from '../../context/darkModeContext'
const HomeNotLogin = () => {
    
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div>
        
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar2/>
        {/* <Navbar /> */}
        <div style={{ display: "flex" }}>
          <div style={{ flex: 6 }}>
      <Counter/>
      <Carousel/>
            {/* <Outlet /> */}
          </div>
        </div>
      </div>
        </div>
  )
}

export default HomeNotLogin