import headshot from '../../assets/bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

import './Hero.css';

export default function Hero() {

  return (
    <div className='hero-container'>
        <div className="full" style={{backgroundImage: `url(${headshot})` }}>
            <div className="text top">
                <h1>Westside Speed</h1><FontAwesomeIcon style={{fontSize: '2em'}} icon={faDumbbell}/>
            </div>
            <div className="cta">
                <h2>Train with the best to become the best.</h2>
                <button className='cta-button'>Join today!</button>
            </div>
        </div>
    </div>
  )
}
