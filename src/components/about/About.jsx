import React from 'react'
import './about.css'
import AboutImg from '../../assets/profile-pic-complete.jpg'
import CV from "../../assets/Sharaneshwar Resume.pdf"
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

					<p className="about__description">I am from Solapur, Maharashtra, highly skilled in Java and have created unique projects in web development using MERN Stack. I actively solve problems on platforms like HackerRank, LeetCode and CodeChef thereby being able to deliver innovative and efficient solutions day by day. Do checkout my projects on GitHub!</p>

					<a download="Sharaneshwar CV" href={CV} className="button button--flex">
						Download CV <img src={files} alt="files" />
					</a>

				</div>
			</div>
		</section>
	)
}

export default About