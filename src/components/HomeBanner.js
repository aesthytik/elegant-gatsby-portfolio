import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

const Container = styled.section`
 background-image: url(../img/banner/common-banner.jpg);
  background-size: cover; 
	.row {
		height: 60% !important;
	}
`;

class HomeBanner extends React.Component {
  componentDidMount() {
    
  }
  render() {
    return(
<Container className="section_gap">
		<div className="container">
	
			<div class="row fullscreen d-flex align-items-center">
					<div class="banner-content col-lg-12 justify-content-center">
						<h1>Vipin Kumar Rawat</h1>
						<h3>Coder | Designer | Writer</h3>
						<a href="#" className="primary-btn">Hire Me</a>
					</div>
				</div>

			<div className="row newsletter_form justify-content-center">
			</div>
		</div>
	</Container>
    )
  }
}


export default HomeBanner
