import React from 'react'
import searchIcon from '../Icons/search.png'
import messageIcon from '../Icons/message.png'
import bellIcon from '../Icons/bell.png'
import settingsIcon from '../Icons/settings.png'
import profile from '../Icons/thomas.jpg'
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar-container' >
      <div className='search-input'>
        <img src={searchIcon} className='icons search-icon' alt='search-icon' />
        <input type='text' style={{border:'none'}} placeholder='Type to search...' />
      </div>
      <div className='profile-container'>
        <div className='icons-container'>
          <img src={settingsIcon} className='icons setting-icon' alt='setting-icon' />
          <img src={messageIcon} className='icons message-icon' alt='message-icon' />
          <img src={bellIcon} className='icons bell-icon' alt='bell-icon' />
        </div>
        <div className='profiles'>
          <div className='profile-name'>
            <h5>Thomas Brown</h5>
            <h5 style={{color:'grey'}} >Developer</h5>
          </div>
          <img src={profile} alt='profile' className='profile-img'/><span>﹀</span>
        </div>
      </div>
    </div>
  )
}
