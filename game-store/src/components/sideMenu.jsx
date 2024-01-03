import React, { useState } from 'react'
import './sideMenu.css'
import NavListItem from './NavListItem';
import navListData from '../data/NavListData';

function SideMenu( {active} ) {
  const [navData, setNavData] = useState(navListData)

  const handleNavOnClick = (id) =>{
  console.log(id)
    const newNavData = navData.map(nav=>{
      nav.active=false;
      if(nav._id === id) nav.active=true;
      return nav;
    })
    setNavData(newNavData);
  }

  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
      <a href="" className='logo'>
      <i className="bi bi-controller"></i>
        <span className='brand'>Play</span>
      </a>
      <ul className="nav">
        {
          navData.map(item=> ( <NavListItem key={item._id} item={item} navOnClick={handleNavOnClick}/>
          ))
        }
      
      </ul>
    </div>
  )
}

export default SideMenu;
