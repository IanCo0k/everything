import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFootball, faCalendar, faPerson, faContactCard } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import './Navbar.css';

export default function Navbar() {

    const [opened, setOpened] = useState(false);

    const handleToggle = () => {
        setOpened(!opened);
      };

  return (
    <div>
        <div className="nav-container">
            <div className="left">
                <a href="/"><img src={logo} alt="Ian Cook Logo" /></a>
            </div>
            
            <div className="right">
                <div className="element"><h1><a href="/#/about">About Us</a></h1></div>
                <div className="element"><h1><a href="/#/schedule">Schedule</a></h1></div>
                <div className="element"><h1><a href="/#/join">Join</a></h1></div>

                <FontAwesomeIcon onClick={handleToggle} className={opened ? 'hamburger flip' : 'hamburger'} icon={faFootball} />
            </div>
        </div>

        <div className={opened ? 'dropdown visible' : 'dropdown'}>
            <div className="dropdown-element"><FontAwesomeIcon style={{fontSize: '2em'}} icon={faPerson}/> <a href="/#/about">About Us</a></div>
            <div className="dropdown-element"><FontAwesomeIcon style={{fontSize: '2em'}} icon={faCalendar}/> <a href="/#/schedule">Schedule</a></div>
            <div className="dropdown-element"><FontAwesomeIcon style={{fontSize: '2em'}} icon={faContactCard}/> <a href="/#/join">Join</a></div>
        </div>

    </div>
  )
}
