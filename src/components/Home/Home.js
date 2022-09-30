import React from 'react'
import './Home.css'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

const Home = () => {
  return (
    <div className='home'>
        <div className='content'>
            <h3>Oliva WD.</h3>
            <h3>Music Video Director.</h3>
            <a href='#work'>Watch Showreel <ArrowRightAltOutlinedIcon className='icon'  /> </a>
        </div>
    </div>
  )
}

export default Home