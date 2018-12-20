import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import './_projects.css'

const Projects = () => {
  return(
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC },
            filter: { fileAbsolutePath: {regex : "\/projects/"} }
          ) {
            edges {
              node {
                id
                frontmatter {
                  date
                  title
                  subtitle
                  url
                  thumbnail {
                    childImageSharp {
                      fluid(maxWidth: 768) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <section className="projects">
          <div className="projects__title">
            <h2>Recent Work</h2>
          </div>
          <div className="projects__grid">
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <a
                  href={node.frontmatter.url}
                  key={node.id}
                  className="projects__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="projects__image">
                    <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
                  </div>
                  <div className="projects__text">
                    {node.frontmatter.title}
                    <span>{node.frontmatter.subtitle}</span>
                  </div>
                </a>
            ))}
          </div>
        </section>
      )}
    />
  )
}

export default Projects
