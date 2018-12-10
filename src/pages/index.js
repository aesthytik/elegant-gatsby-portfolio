import React from 'react'
import { Link } from 'gatsby'

import HomeBanner from '../components/HomeBanner'
import Portfolio from '../components/Portfolio'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
   <HomeBanner />
   <Portfolio />
  </Layout>
)

export default IndexPage
