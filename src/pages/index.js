import React from 'react'
import { Link } from 'gatsby'

import HomeBanner from '../components/HomeBanner'
import Portfolio from '../components/Portfolio'
import Layout from '../components/layout'
import AboutMyself from '../components/AboutMyself';
import NewsLetter from '../components/NewsLetter';

const IndexPage = () => (
  <Layout>
   <HomeBanner />
   <Portfolio />
   <AboutMyself />
   <NewsLetter />
  </Layout>
)

export default IndexPage
