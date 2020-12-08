import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaSoundcloud, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa'

class Navbar extends Component {
    render() { 
        return (  
        <nav className="navbar navbar-expand-lg">
            <div className="container">
      
                <div>
                    <a href="https://www.facebook.com/tennisinc/" target="_blank" rel="noreferrer"><FaFacebook className="fa"/></a>
                    <a href="https://twitter.com/TennisInc" target="_blank" rel="noreferrer"><FaTwitter className="fa"/></a>
                    <a href="http://soundcloud.com/tennisinc" target="_blank" rel="noreferrer"><FaSoundcloud className="fa"/></a>
                    <a href="https://www.instagram.com/tennisinc/" target="_blank" rel="noreferrer"><FaInstagram className="fa"/></a>
                    <a href="https://www.youtube.com/channel/UCVOdVSbZ_U2YblectplZgyw" target="_blank" rel="noreferrer"><FaYoutube className="fa"/></a>
                    <a href="https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM" target="_blank" rel="noreferrer"><FaSpotify className="fa"/></a>
                </div>
                
                <button className="navbar-toggler navbar-light dropdown" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <Link className="nav-item nav-link navigationtext" to="/home">About</Link>
                      <Link className="nav-item nav-link navigationtext" to="/music">Music</Link>
                      <Link className="nav-item nav-link navigationtext" to="/store">Store</Link>
                      <Link className="nav-item nav-link navigationtext" to="/contact">Contact</Link>
                    </div>
                  </div>
            </div>
        </nav>

        );
    }
}
 
export default Navbar;