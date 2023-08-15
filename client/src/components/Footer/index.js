import React from "react";
import '../../styles/style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="bcLogo">
                <p>Powered by ButtCheeks.Co ©</p>
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