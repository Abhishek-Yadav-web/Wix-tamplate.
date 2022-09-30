import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Navbar.css'

const Navbar = () => {
  const [active,setActive] = useState(false);
  return (
    <>
      <div className='navbar'>
          <span className='logo'>  <img src="https://res.cloudinary.com/facemetaclone/image/upload/v1664451790/favicon_hvkbsz.png" alt="logo" /> OLIVA.</span>
          <div className='toogleDiv' onClick={() => {setActive(true)}}>
            <span></span>
          </div>
      </div>
      <Sidebar active={active} setActive={setActive}/>
    </>
  )
}

export default Navbar