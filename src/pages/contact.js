import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ContactBanner from '../components/ContactBanner';
import ContactForm from '../components/ContactForm';


const Contact = () => (
  <Layout>
  <ContactBanner title="Contact Me"/>
  <ContactForm />
  </Layout>
)

export default Contact
