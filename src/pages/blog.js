import React from 'react'

import Layout from '../components/layout'
import ContactBanner from '../components/ContactBanner';
import BlogArea from '../components/BlogArea';


const Blog = () => (
  <Layout>
  <ContactBanner title="My Blog"/>
  <BlogArea />
  </Layout>
)

export default Blog
