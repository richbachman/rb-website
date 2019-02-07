const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const journalTemplate = path.resolve(`src/templates/journal-entry.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: {regex : "\/journal/"} }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: journalTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}

const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId
}) => {
  const { createNodeField, createNode } = actions

  if (node.internal.type === `MediumPost` && node.virtuals.previewImage) {
    const mainImageNode = await createRemoteFileNode({
      url: 'https://cdn-images-1.medium.com/max/768/' + node.virtuals.previewImage.imageId,
      store,
      cache,
      createNode,
      createNodeId
    })

    if (mainImageNode) {
      createNodeField({
        node,
        name: `linktoMainImage___NODE`,
        value: mainImageNode.id
      })
    }
  }
}