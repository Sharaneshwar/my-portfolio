import React from 'react'
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section className="footer_get_touch_outer" id='contact'>
            <h1 className="section__title">Contact Me</h1>
            <span className="section__subtitle">Get In Touch</span>

            <div className="contact_container">
                <div className="footer_get_touch_inner grid-70-30">
                    <div className="colmun-70 get_form">
                        <div className="get_form_inner">
                            <form action="#">
                                <div className="grid-50-50">
                                    <input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="tel" placeholder="Phone/Skype" />
                                </div>
                                <div className="grid-full">
                                    <textarea placeholder="About Your Project" cols="30" rows="10"></textarea>
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="colmun-30 get_say_form">
                        <ul className="get_say_info_sec">
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:punjalsharaneshwar@gmail.com">punjalsharaneshwar@gmail.com</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faWhatsapp} />
                                <a href="https://wa.me/919075945885">+91 9075945885</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faGithub} />
                                <a href="https://github.com/Sharaneshwar">GitHub</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                                <a href="https://www.linkedin.com/in/sharaneshwar-punjal/">LinkedIn</a>
                            </li>
                        </ul>
                        <ul className="get_say_social-icn">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;