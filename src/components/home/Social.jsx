import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faHackerrank, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import leetcode from '../../assets/leetcode.svg'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/Sharaneshwar" className="home__social-icon" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />     
            </a>

            <a href="https://www.linkedin.com/in/sharaneshwar-punjal/" className="home__social-icon" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a href="https://twitter.com/Sharan_2208" className="home__social-icon" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
            </a>

            <a href="https://www.hackerrank.com/sharaneshwar" className="home__social-icon" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faHackerrank} />
            </a>

            <a href="https://www.leetcode.com/sharaneshwar" className="home__social-icon" target="_blank" rel="noreferrer">
                <img src={leetcode} alt="leetcode" />
            </a>

        </div>
    )
}

export default Social