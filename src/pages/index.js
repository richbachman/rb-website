import React from 'react'

import Layout from '../components/layout'
import Header from '../components/header'
import Projects from '../components/projects'
import Articles from '../components/articles'
import Checkout from '../components/checkout'

const IndexPage = () => {

  return(
    <Layout>
      <Header
        heading="Hello, I'm Rich."
        subheading="I'm a front-end developer specializing in scalable CSS, website performance,
        and component-based design systems. I know my way around Gatsby, Craft CMS, and Wordpress.
        I spend my days at SendGrid, and evenings/weekends hiking and taking photos."
      />
      <Checkout product="Test Print" size="Black and White 11x17" cost="2000" />
      <Projects />
      <Articles />
    </Layout>
  )
}

export default IndexPage
