import React from 'react'
import hackerrank from '../../assets/hackerrank.png'
import twitter from '../../assets/twitter.png'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/Sharaneshwar" className="home__social-icon" target="_blank">
                <i class="uil uil-github-alt"></i>
            </a>

            <a href="https://www.linkedin.com/in/sharaneshwar-punjal/" className="home__social-icon" target="_blank">
                <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://twitter.com/Sharan_2208" className="home__social-icon" target="_blank">
                <img src={twitter} alt='twitter' />
            </a>

            <a href="https://www.hackerrank.com/sharaneshwar" className="home__social-icon" target="_blank">
                <img src={hackerrank} alt='hackerrank' />
            </a>

        </div>
    )
}

export default Social