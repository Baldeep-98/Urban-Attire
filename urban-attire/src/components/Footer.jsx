import React from "react";
import logo from '../assests/Images/logo.png';
import insta from '../assests/Images/insta.jpg';
import facebook from '../assests/Images/facebook.png';
import twitter from '../assests/Images/twitter.png';
import youtube from '../assests/Images/youtube.png';
import Navoptions from "./NavOptions";

function Footer() {
    return (
        <footer>
            <div id="footer-container">
                <div id="footer1">
                    <div className="logo-section">
                        <img className="logo" src={logo} alt="site logo" />
                    </div>
                    <h1 className="footerheading">Get In Touch</h1>
                    <p>Dressing You in Confidence, One Outfit at a Time</p>
                </div>
                <div className="social-links">
                    <div>
                        <img src={insta} alt="instagram" />
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={youtube} alt="youtube" />
                    </div>
                </div>
                <div id="section-footer2">
                    <Navoptions />
                </div>
            </div>
            <p id="copyright">Copyright &copy; Baldeep Sharma <em>Urban Attire</em></p>
        </footer>
    );
}

export default Footer;
