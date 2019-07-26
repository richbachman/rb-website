import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Moment from 'react-moment';
import Helmet from 'react-helmet';

import Layout from '../components/layout'
import Header from '../components/header'

const PhotographyPage = () => {
  return(
    <StaticQuery
      query={graphql`
        query {
          allFlickrPhoto(
            sort: { order: DESC, fields: [datetaken] }
          ) {
            edges {
              node {
                id
                title
                description
                datetaken
                fields {
                  linktoFlickrImage {
                    childImageSharp {
                      fluid(maxWidth: 1080) {
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
        <Layout>
          <Helmet
              bodyAttributes={{
                  class: 'photo-page'
              }}
          />
          <Header
            heading="Photography"
            subheading=""
          />
          <section className="photos">
            <div className="photos__grid">
              <div className="photos__content">
                <ul className="photos__list">
                  {data.allFlickrPhoto.edges.map(({ node }) => (
                    <li key={node.id}>
                      <Img fluid={node.fields.linktoFlickrImage.childImageSharp.fluid} />
                      <div className="photos__description">
                        <h3>{node.title}</h3>
                        <span>
                          <Moment format="MMMM Do, YYYY">
                            {node.datetaken}
                          </Moment>
                        </span>
                        <p>{node.description}</p>
                      </div>
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

export default PhotographyPage
