import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Logo = styled.img`
height: 60px;
`;

const Footer = ({ siteTitle }) => (
  <footer className="footer_area section_gap">
		<div className="container">
			<div className="row footer_inner justify-content-center">
				<div className="col-lg-6 text-center">
					<aside className="f_widget social_widget">
						<div className="f_logo">
							<Logo src="img/icon.png" alt="" />
						</div>
						<div className="f_title">
							<h4>Follow Me</h4>
						</div>
						<ul className="list">
							<li><a href="#"><i className="fa fa-github"></i></a></li>
							<li><a href="#"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i className="fa fa-instagram"></i></a></li>
							<li><a href="#"><i className="fa fa-facebook"></i></a></li>
						</ul>
					</aside>
					<div className="copyright">
						<p>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
           </p>
					</div>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
