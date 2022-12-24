import React, { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { SidebarData2 } from './SidebarData2';
import './sidebar.scss';
import { AuthContext } from '../../context/authContext';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  

  return (
    <>
          <Link to='#' className='menu-bars'>
            <MenuIcon onClick={showSidebar} />  
          </Link>
        <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
          <ul className='side-menu-items' onClick={showSidebar}>
            <li className='sidebar-toggle'>
              <Link to='#' className='menu-bars'>
              <img src={require('../../assets/logocircle.png')} style={{width:'90px',marginleft:'10px'}} alt="" />
              </Link>
            </li>
            {/* <span style={{font:'small'}}>Hey There!</span> */}
            {SidebarData2.map((item, index) => {
              return (
                
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <a href={item.url} target=' '>
                    <span>{item.title}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  );
}

export default Sidebar;