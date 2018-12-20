import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import './_articles.css'

const mediumCDNUrl = `https://cdn-images-1.medium.com/max/768`
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
                  previewImage {
                    imageId
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
                <img
                  src={`${mediumCDNUrl}/${node.virtuals.previewImage.imageId}`}
                  alt={node.title}
                />
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
