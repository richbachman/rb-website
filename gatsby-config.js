const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Front-end Developer CSS Website Design Systems Gatsby Craft CMS Wordpress - Rich Bachman',
    description: 'A front-end developer specializing in clean scalable CSS, website performance, and component-based design systems. I know my way around Gatsby, Craft CMS, and Wordpress.'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Rich Bachman',
        short_name: 'richbachman',
        start_url: '/',
        background_color: '#1167FB',
        theme_color: '#1167FB',
        display: 'minimal-ui',
        icon: 'src/images/rb-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `journal`,
        path: path.join(__dirname, `src`, `journal`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: path.join(__dirname, `src`, `projects`),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Libre Baskerville`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `600`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@richbachman`,
        limit: 3,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-108473425-1",
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-flickr",
      options: {
        api_key: '00956a3c0533188c22924ff658cd398f',
        user_id: '50548574@N08',
        method: 'flickr.photosets.getPhotos',
        photoset_id: '72157709255118973'
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
}
