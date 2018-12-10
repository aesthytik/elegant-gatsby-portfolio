import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const AboutMyself = ({ siteTitle }) => (
  <section className="about-area section_gap gray-bg">
		<div className="container">
			<div className="row align-items-center justify-content-between">
				<div className="col-lg-5 about-left">
					<img className="img-fluid" src="img/dev.svg" alt="" />
				</div>
				<div className="col-lg-6 col-md-12 about-right">
					<div className="main-title text-left">
						<h1>about myself</h1>
					</div>
					<div className="mb-50 wow fadeIn" data-wow-duration=".8s">
						<p>
						I am a passionate frontend-developer with an eye for design. 
						I design websites that have a modern touch. Being from a design field,
						 I can work on web aesthetics and transitions. I write blogs, poems, do sketches.
						</p>
						<p> I work on GatsbyJS, NextJS for web apps development. 
						I make ios and android apps on React Native. 
						I draw, design, write and develop solutions.
						</p>
					</div>
					<a href="#" className="primary-btn">More Info</a>
				</div>
			</div>
		</div>
	</section>
)

export default AboutMyself
