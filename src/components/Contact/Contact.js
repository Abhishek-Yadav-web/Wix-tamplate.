import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact'>
        <h3>Contact: info@oliva.com</h3>
        <div className='newsletter'>
            <h2>Keep Up with My Latest Work</h2>
            <div className="inputBx">
                <input type="text" placeholder='Enter your email here.'/>
                <div className="btn">
                    Subscribe Now
                </div>
            </div>
        </div>
            <p className='copyright'>
                © 2023 by Oliva WD. Proudly created of Wix.com
            </p>
    </div>
  )
}
