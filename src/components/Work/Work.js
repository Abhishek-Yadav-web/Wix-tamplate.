import React, { useState } from 'react'
import { Heading } from '../Heading/Heading'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './Work.css'

export const Work = () => {

    const musicVideos = [
        {
            id : 1,
            title: 'Rosa Linn - Snap - (Official Eurovision Music Video)',
            thumnail : "https://i.ytimg.com/vi/YazbijPyVJ4/maxresdefault.jpg",
            video : `https://www.youtube.com/embed/Lo4_K4relMg`
        },
        {
            id : 2,
            title: 'One Direction - Steal My Girl (Official 4K Video)',
            thumnail : "https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2014-10/1d_new_vide_vidpic_1280.jpg?itok=gz6YS7gC",
            video : `https://www.youtube.com/embed/dTblx3FmUVY`
        },
        {
            id : 3,
            title: 'Nicky Youre, dazy - Sunroof (Official Music Video)',
            thumnail : "https://i.ytimg.com/vi/ADmnmpqco28/maxresdefault.jpg",
            video : `https://www.youtube.com/embed/G5xSLbYMr-I`
        },
        {
            id : 4,
            title: 'Ellie Goulding - Love Me Like You Do (Official Video)',
            thumnail : "https://i.ytimg.com/vi/725WlG1idPc/maxresdefault.jpg",
            video : `https://www.youtube.com/embed/AJtDXIazrMo`
        },
        {
            id : 5,
            title: 'AURORA - Runaway',
            thumnail : "https://i.ytimg.com/vi/mSIQ70Lfs-g/maxresdefault.jpg",
            video : `https://www.youtube.com/embed/d_HlPboLRL8`
        },

    ]

    const [currentVideo,setCurrentVideo] = useState(1)

  return (
    <div className='work' id='work'>
        <Heading heading={'Featured Work'}/>
        <div className='currentVideo'>
            {
                 musicVideos.map((video,i) => {
                    if(currentVideo === video.id) {
                        return (
                            <iframe className="iframe" src={video.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        )
                    }
                 })
            }
        </div>
        <div className='musicVideo'>
            {
                musicVideos.map((video,i) => {
                    if(currentVideo !== video.id) {
                        return (
                            <div className="videoBx">
                                <img src={video.thumnail} alt={video.title} className="thumnail" />
                                <p className='title'>{video.title}</p>
                                <div className="playbutton" onClick={() => {setCurrentVideo(video.id)}}>
                                    <PlayArrowIcon className='playIcon' />
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    </div>
  )
}
