import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link rel="stylesheet" href="/css/bootstrap.css"></link>
          <link rel="stylesheet" href="/vendors/linericon/style.css" />
          <link rel="stylesheet" href="/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/vendors/owl-carousel/owl.carousel.min.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          <link rel="stylesheet" href="/vendors/nice-select/css/nice-select.css" />
          <link rel="stylesheet" href="/vendors/animate-css/animate.css" />
          <link rel="stylesheet" href="/vendors/flaticon/flaticon.css" />
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="/js/jquery-3.2.1.min.js" />
						<script src="/js/popper.js" />
						<script src="/js/bootstrap.min.js" />
						<script src="/js/stellar.js" />
						<script src="/js/jquery.magnific-popup.min.js" />
						<script src="/vendors/nice-select/js/jquery.nice-select.min.js" />
						<script src="/vendors/isotope/imagesloaded.pkgd.min.js" />
						<script src="/vendors/isotope/isotope-min.js" />
						<script src="/vendors/owl-carousel/owl.carousel.min.js" />
						<script src="/js/jquery.ajaxchimp.min.js" />
						<script src="/js/theme.js" />
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
