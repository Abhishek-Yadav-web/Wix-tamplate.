import React from 'react'
import './Bgclip.css'

const Bgclip = () => {
  return (
    <div className="videoContainer">
        <video src="https://res.cloudinary.com/facemetaclone/video/upload/v1664474195/file_t4t6kz.mp4" loop muted autoPlay className='bgVideo'></video>
    </div>
  )
}

export default Bgclip