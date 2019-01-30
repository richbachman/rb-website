import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'

export default function journalTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Header
        heading={frontmatter.title}
        subheading={frontmatter.date}
      />
      <section className="journal">
        <div className="journal__grid">
          <div className="journal__content">
            <div
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Link to="/journal">Back to Work Journal</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
