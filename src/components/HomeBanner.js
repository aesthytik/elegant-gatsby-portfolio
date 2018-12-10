import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

class HomeBanner extends React.Component {
  componentDidMount() {
    
  }
  render() {
    return(
<section className="banner-area owl-carousel" id="home">
  <div className="single_slide_banner slide_bg1">
    <div className="container">
      <div className="row fullscreen d-flex align-items-center">
        <div className="banner-content col-lg-12 justify-content-center">
          <h1>Steve Henriques</h1>
          <h3>Personal portfolio Website</h3>
          <a href="#" className="primary-btn">Hire Me</a>
        </div>
      </div>
    </div>
  </div>
  <div className="single_slide_banner slide_bg2">
    <div className="container">
      <div className="row fullscreen d-flex align-items-center">
        <div className="banner-content col-lg-12 justify-content-center">
          <h1>Steve Henriques</h1>
          <h3>Personal portfolio Website</h3>
          <a href="#" className="primary-btn">Hire Me</a>
        </div>
      </div>
    </div>
  </div>
  <div className="single_slide_banner slide_bg3">
    <div className="container">
      <div className="row fullscreen justify-content-endd-flex align-items-center">
        <div className="banner-content col-lg-12 justify-content-center">
          <h1>Steve Henriques</h1>
          <h3>Personal portfolio Website</h3>
          <a href="#" className="primary-btn">Hire Me</a>
        </div>
      </div>
    </div>
  </div>
</section>
    )
  }
}


export default HomeBanner
