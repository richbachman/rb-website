import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'

const JournalPage = () => {
  return(
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] },
            filter: { fileAbsolutePath: {regex : "\/journal/"} }
          ) {
            edges {
              node {
                id
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  path
                  title
                  intro
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Layout>
          <Header
            heading="Work Journal"
            subheading="Something new for 2019. Every week I write
            about what I'm working on, problems I may or may not have solved,
            and things I'm still trying to figure out."
          />
          <section className="journal">
            <div className="journal__grid">
              <div className="journal__content">
                <ul className="journal__list">
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <li key={node.id}>
                      <span>{node.frontmatter.date}</span>
                      <h3>
                        <Link to={node.frontmatter.path}>
                          {node.frontmatter.title}
                        </Link>
                      </h3>
                      <p>{node.frontmatter.intro}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </Layout>
      )}
    />
  )
}

export default JournalPage
