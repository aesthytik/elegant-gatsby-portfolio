import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const NewsLetter = ({ siteTitle }) => (
  <section className="section_gap newsletter-area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6 text-center">
					<div className="main-title">
						<h1>Join my Newsletter</h1>
						<p>
							Subscribe to my latest news and related activities.
						</p>
					</div>
				</div>
			</div>
			<div className="row newsletter_form justify-content-center">
				<div className="col-lg-6 col-md-6 col-sm-6">
					<div className="d-flex flex-row" id="mc_embed_signup">
						<form className="w-100" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
						 method="get">
							<div className="navbar-form">
								<div className="input-group add-on">
									<input className="form-control" name="EMAIL" placeholder="Your email address" onfocus="this.placeholder = ''"
									 onblur="this.placeholder = 'Your email address'" required="" type="email" />
									<div style={{position: 'absolute',left: '-5000px'}}>
										<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
									</div>
									<div className="input-group-btn">
										<button className="genric-btn text-uppercase">
											Subscribe
										</button>
									</div>
								</div>
							</div>
							<div className="info mt-20"></div>
						</form>

					</div>
				</div>
			</div>
		</div>
	</section>
)

export default NewsLetter
