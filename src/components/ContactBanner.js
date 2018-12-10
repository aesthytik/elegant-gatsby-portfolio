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

class ContactBanner extends React.Component {
  componentDidMount() {
    
  }
  render() {
      
    return(
<section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
            <div className="container">
                <div className="banner_content text-right">
                    <h1>{this.props.title}</h1>
                    <div className="page_link">
                        <a href="index.html">Home</a>
                        <a href="contact.html">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}


export default ContactBanner
