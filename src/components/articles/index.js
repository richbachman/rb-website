import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import './_articles.css'

const mediumUrl = `https://medium.com/@richbachman`

const Articles = () => {
  return(
    <StaticQuery
      query={graphql`
        query {
          allMediumPost(sort: { fields: [createdAt], order: DESC }) {
            edges {
              node {
                id
                uniqueSlug
                title
                virtuals {
                  subtitle
                }
                fields {
                  linktoMainImage {
                    childImageSharp {
                      fluid(maxWidth: 768) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                author {
                  name
                }
              }
            }
          }
        }
      `}
      render={data => (
        <section className="articles">
          <div className="articles__title">
            <h2>Ramblings</h2>
          </div>
          <div className="articles__grid">
            {data.allMediumPost.edges.map(({ node }) => (
              <a
                href={`${mediumUrl}/${node.uniqueSlug}`}
                key={node.id}
                className="articles__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img fluid={node.fields.linktoMainImage.childImageSharp.fluid} />
                <div className="articles__text">
                  {node.title}
                  <span>{node.virtuals.subtitle}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    />
  )
}

export default Articles
