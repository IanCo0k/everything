import './Read.css';
import Navbar from '../Navbar/Navbar';
import banner from '../../assets/banner.jpeg';
import Footer from '../Footer/Footer';

export default function Read() {
  return (
    <div className="container">
        <Navbar></Navbar>
        <div className="read-container">

            <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
                <div className="banner-text fade-in">
                    <h1>Read my blogs!</h1>
                </div>
            </div>

            <div className="read-content">
             <div className="blog-left">

             </div>
             <div className="blog-right">

             </div>
             <div className="blog-left">

             </div>
             <div className="blog-right">
              
             </div>
             <div className="blog-left">

             </div>
             <div className="blog-right">
              
             </div>
            </div>
        </div>
    </div>
  )
}
