import React from 'react'
import './about.css'
import AboutImg from '../../assets/profile-pic-complete.jpg'
import CV from "../../assets/Sharaneshwar-CV.pdf"
import Info from './Info'
import files from '../../assets/files.svg'

const About = () => {
	return (
		<section className="about section" id="about">
			<h1 className="section__title">About Me</h1>
			<span className="section__subtitle">My Introduction</span>

			<div className="about__container container grid">
				<img src={AboutImg} alt="" className="about__img" />

				<div className="about__data">
					<Info />

					<p className="about__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repudiandae sapiente fugiat voluptatum quidem, earum dolore aut consequatur reprehenderit distinctio officia, laborum labore quis veritatis saepe? Obcaecati veniam fugit, sequi soluta corrupti nesciunt placeat nemo?</p>

					<a download="Sharaneshwar CV" href={CV} className="button button--flex">
						Download CV <img src={files} alt="files" />
					</a>

				</div>
			</div>
		</section>
	)
}

export default About