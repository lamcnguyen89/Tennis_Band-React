import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return (  
        <nav className="navbar navbar-expand-lg">
            <div className="container">
      
                <div>
                    <a href="https://www.facebook.com/tennisinc/" className="fa fa-facebook" target="_blank" rel="noreferrer"></a>
                    <a href="https://twitter.com/TennisInc" className="fa fa-twitter" target="_blank" rel="noreferrer"></a>
                    <a href="http://soundcloud.com/tennisinc" className="fa fa-soundcloud" target="_blank" rel="noreferrer"></a>
                    <a href="https://www.instagram.com/tennisinc/" className="fa fa-instagram" target="_blank" rel="noreferrer"></a>
                    <a href="https://www.youtube.com/channel/UCVOdVSbZ_U2YblectplZgyw" className="fa fa-youtube" target="_blank" rel="noreferrer"></a>
                    <a href="https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM" className="fa fa-spotify" target="_blank" rel="noreferrer"></a>
                </div>
                
                <button className="navbar-toggler navbar-light dropdown" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <Link className="nav-item nav-link navigationtext" to="/">About</Link>
                      <Link className="nav-item nav-link navigationtext" to="/music">About</Link>
                      <Link className="nav-item nav-link navigationtext" to="/store">About</Link>
                      <Link className="nav-item nav-link navigationtext" to="/contact">About</Link>
                    </div>
                  </div>
            </div>
        </nav>

        );
    }
}
 
export default Navbar;