import React, { Component } from 'react';
import {FaCopyright} from 'react-icons/fa';

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <div className="container text-center">
                <p className="pt-3"><FaCopyright/> Midnight Machine LLC.</p>
                </div>
            </footer>
        )
    }
}

export default Footer;