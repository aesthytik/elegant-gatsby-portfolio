import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Portfolio = ({ siteTitle }) => (
  <section className="section_gap portfolio_area" id="work">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6 text-center">
					<div className="main-title">
						<h1>Latest Works</h1>
						<p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may
							see some for as low as $.17 each.</p>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-lg-10">
					<div className="projects_fillter">
						<ul className="filter list">
							<li className="active" data-filter="*">All Categories</li>
							<li data-filter=".brand">Branding</li>
							<li data-filter=".work">Creative Work </li>
							<li data-filter=".web">Web Design</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="projects_inner row grid">
				<div className="grid-sizer col-sm-6 col-md-3 col-lg-3"></div>
				<div className="col-lg-6 col-sm-6 col-sm-12 brand web grid-item">
					<div className="projects_item">
						<img className="img-fluid w-100" src="img/works/work1.jpg" alt="" />
						<div className="projects_text">
							<a href="portfolio-details.html">
								<h4>2D Vinyl Design</h4>
							</a>
							<p>Client Project</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 col-sm-12 brand work grid-item">
					<div className="projects_item">
						<img className="img-fluid w-100" src="img/works/work2.jpg" alt="" />
						<div className="projects_text">
							<a href="portfolio-details.html">
								<h4>2D Vinyl Design</h4>
							</a>
							<p>Client Project</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 work grid-item">
					<div className="projects_item">
						<img className="img-fluid w-100" src="img/works/work3.jpg" alt="" />
						<div className="projects_text">
							<a href="portfolio-details.html">
								<h4>2D Vinyl Design</h4>
							</a>
							<p>Client Project</p>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-sm-6 brand work grid-item">
					<div className="projects_item">
						<img className="img-fluid w-100" src="img/works/work5.jpg" alt="" />
						<div className="projects_text">
							<a href="portfolio-details.html">
								<h4>2D Vinyl Design</h4>
							</a>
							<p>Client Project</p>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-sm-6 brand web grid-item">
					<div className="projects_item">
						<img className="img-fluid w-100" src="img/works/work4.jpg" alt="" />
						<div className="projects_text">
							<a href="portfolio-details.html">
								<h4>2D Vinyl Design</h4>
							</a>
							<p>Client Project</p>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-sm-6 brand work web grid-item">
					<div className="projects_item">
						<img className="img-fluid w-100" src="img/works/work8.jpg" alt="" />
						<div className="projects_text">
							<a href="portfolio-details.html">
								<h4>2D Vinyl Design</h4>
							</a>
							<p>Client Project</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 brand work web grid-item">
					<div className="projects_item">
						<img className="img-fluid w-100" src="img/works/work6.jpg" alt="" />
						<div className="projects_text">
							<a href="portfolio-details.html">
								<h4>2D Vinyl Design</h4>
							</a>
							<p>Client Project</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 brand work web grid-item">
					<div className="projects_item">
						<img className="img-fluid w-100" src="img/works/work7.jpg" alt="" />
						<div className="projects_text">
							<a href="portfolio-details.html">
								<h4>2D Vinyl Design</h4>
							</a>
							<p>Client Project</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default Portfolio
