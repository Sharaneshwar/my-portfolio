import React from 'react'

const Info = () => {
    return (
        <div className="about__info gird">
            <div className="about__box">
                <i className='bx bx-award about__icon'></i>
                <h3 className="about__title">Won</h3>
                <span className="about__subtitle">5+ Competitions</span>
            </div>

            <div className="about__box">
                <i className='bx bx-briefcase about__icon' ></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">10+ projects</span>
            </div>

            <div className="about__box">
                <i className='bx bx-support about__icon' ></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24x7</span>
            </div>
        </div>
    )
}

export default Info