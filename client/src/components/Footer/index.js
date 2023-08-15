import React from "react";
import '../../styles/style.css';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="bcLogo">
                <p>Powered by <Link to='/secret' className="secretLink">B</Link>uttCheeks.Co ©</p>
            </div>
            <div className="socialIcons">
                {/* <a href="https://github.com/your-github-profile">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a> */}
            </div>
        </footer>
    );
};

export default Footer;