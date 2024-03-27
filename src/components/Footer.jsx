import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='md:px-[80px] sm:px-[30px] px-[10px] md:py-[30px] py-[30px] bg-black text-[#c7c1c1]'>
      <div className='flex justify-center items-center'>
        <Link to='/'>
          <img className="object-cover lg:w-[330px] w-[350px]"   src="header_logo.webp" alt="logo" />
        </Link>
      </div>
      <div className='footer-main'>

        <div className='footer-box'>
          <h3>Digital Markeitng Services</h3>
          <p>Google Ads</p>
          <p>Search Engine Optimization</p>
          <p>Social Media Marketing</p>
          <p>Online Marketing</p>
        </div>

        <div className='footer-box'>
          <h3>Accolades</h3>
          <p>The ultimatum of our successful company is to adequately provide our prospective clients with the required service that they promptly demand from us.</p>
        </div>

        <div className='footer-box'>
          <h3>Branches</h3>
          <p>Calicut</p>
          <p>Trivandrum</p>
          <p>Banglore</p>
          <p>Mumbai</p>
        </div>

        <div className='footer-box recent-box'>
          <h3>Recent Updates</h3>
          <a href='https://www.facebook.com/accoladesmc/?ref=bookmarks'>Accolades Media</a>
        </div>

      </div>
      <div className='last-footer'>
        <p>&copy; 2024 | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer