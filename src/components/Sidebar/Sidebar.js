import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './Sidebar.css'

const Sidebar = ({active,setActive}) => {

  return (
    <div className={`sidebar ${active && 'open'}`}>
        <CloseIcon className="close" onClick={() => {setActive(false)}} />
        <div className='links'>
            <a href="#home" id='active'>Home</a>
            <a href="#work">Featured Work</a>
            <a href="#about">About</a>
        </div>
    </div>
  )
}

export default Sidebar