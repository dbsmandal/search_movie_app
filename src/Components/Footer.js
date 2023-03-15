import React from "react";
import "./footer.css"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (<>
        <footer>
            <div className="container grid grid-three-column">

                <div className="footer-about">
                    <p>Copyright © 2023 <a className="anchor_text" style={{textDecoration:'none',color:'white',fontSize:'2rem'}} href="https://github.com/dbsmandal/search_movie_app" target="_blank" rel="noreferrer">Dipak Mandal</a></p>
                </div>


                <div className="footer-social">
                    <h3>Check My Social Profile</h3>
                    <div className="footer-social--icons">
                        <div>
                            <a
                                href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin"
                                target="_blank" rel="noreferrer">
                                <FaLinkedin className="icons" />
                            </a>

                        </div>
                        <div>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank" rel="noreferrer">
                                <FaFacebook className="icons" />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://github.com/dbsmandal"
                                target="_blank" rel="noreferrer">
                                <FaGithub className="icons" />
                            </a>
                        </div>
                    </div>
                </div>


                <div className="footer-contact">
                    <h3>Call Me</h3>
                    <h3>+91 9734078407</h3>
                </div>
            </div>

        </footer>

    </>);
};
export default Footer;