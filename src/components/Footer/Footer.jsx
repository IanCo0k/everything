import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
        <div className="socials">
            <a href="https://www.instagram.com/westside_speed/"><FontAwesomeIcon className='icon' icon={faInstagram}/></a>
        </div>
        <h3>Westside Speed</h3>
    </div>
  )
}
