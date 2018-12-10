/* global $:true */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Logo = styled.img`
`;

class Header extends React.Component {
	componentDidMount() {
		var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  $(".fullscreen").css("height", window_height);
  $(".fitscreen").css("height", fitscreen);

  var nav_offset_top = $("header").height() + 50;

		function navbarFixed() {
			if ($(".header_area").length) {
				$(window).scroll(function() {
					var scroll = $(window).scrollTop();
					if (scroll >= nav_offset_top) {
						$(".header_area").addClass("navbar_fixed");
					} else {
						$(".header_area").removeClass("navbar_fixed");
					}
				});
			}
		}
		navbarFixed();
	}

	render() {
		return(
			<header className="header_area">
		<div className="main_menu">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container">

					<Link className="navbar-brand" to="/"><Logo src="/img/icon-s.png" alt="" /></Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul className="nav navbar-nav menu_nav justify-content-end">
							<li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
							<li className="nav-item submenu dropdown">
								<Link to="/blog" className="nav-link dropdown-toggle">Blog</Link>
							</li>
							<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
		)
	}
}

export default Header
