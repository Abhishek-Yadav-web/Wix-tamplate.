import React from 'react'
import './Social.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Social = () => {
  return (
    <div className='social'>
        <YouTubeIcon className='social-icon' />
        <InstagramIcon className='social-icon' />
        <LinkedInIcon className='social-icon' />
        <GitHubIcon className='social-icon' />
        <TwitterIcon className='social-icon' />
    </div>
  )
}
