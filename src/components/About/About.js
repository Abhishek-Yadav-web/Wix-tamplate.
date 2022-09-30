import React from 'react'
import { Heading } from '../Heading/Heading'
import './About.css'

export const About = () => {
  return (
    <div className='about'>
        <div className="contentBx" id='about'>
            <Heading heading={'About'}/>
            <h1>Oliva WD.</h1>
            <h2>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</h2>
            <h3>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</h3>
            <div className="imgBx">
                <img src="https://static.wixstatic.com/media/ea26fd_6fdd70aadf0f4c9eaf81452a058ab2b8~mv2_d_3400_5100_s_4_2.jpg/v1/crop/x_912,y_387,w_1899,h_2640/fill/w_658,h_914,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_6fdd70aadf0f4c9eaf81452a058ab2b8~mv2_d_3400_5100_s_4_2.jpg" alt="it's me" />
            </div>
        </div>
    </div>
  )
}
