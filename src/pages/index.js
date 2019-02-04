import React from 'react'

import Layout from '../components/layout'
import Header from '../components/header'
import Projects from '../components/projects'
import Articles from '../components/articles'

const IndexPage = () => {

  return(
    <Layout>
      <Header
        heading="Hello, I'm Rich."
        subheading="I'm a front-end developer specializing in scalable CSS, component-based design systems,
        and website performance. I'm familiar with Gatsby, Craft CMS, and Wordpress.
        My days are spent at Twilio SendGrid, and evenings and weekends are for hiking and taking photos."
      />
      <Projects />
      <Articles />
    </Layout>
  )
}

export default IndexPage
