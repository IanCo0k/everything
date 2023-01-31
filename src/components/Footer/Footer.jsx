import { useInViewport } from 'react-in-viewport';
import {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
        <div className="socials">
            <a href="https://www.instagram.com/ianco0k/"><FontAwesomeIcon className='icon' icon={faInstagram}/></a>
            <a href="https://www.facebook.com/profile.php?id=100050493382984"><FontAwesomeIcon className='icon' icon={faFacebook}/></a>
            <a href="https://twitter.com/Chefc0ok"><FontAwesomeIcon className='icon' icon={faTwitter}/></a>
            <a href="https://github.com/IanCo0k"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
        </div>
        <h3>Ian Cook</h3>
    </div>
  )
}
