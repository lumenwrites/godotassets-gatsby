module.exports = {
  siteMetadata: {
    title: `Godot Assets`,
    author: {
      name: `lumenwrites`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `Assets for Godot Game Engine`,
    siteUrl: `https://godotassets.io`,
    image: `/social.png`,
    twitterUsername: "@lumenwrites",
    social: {
      twitter: `lumenwrites`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              withWebp: true,
              disableBgImageOnAlpha: true
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          //`gatsby-remark-prismjs`,
          //`gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-173382882-1`,
      },
    },
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Godot Assets`,
        short_name: `Godot Assets`,
        start_url: `/`,
        background_color: `#f66314`,
        theme_color: `#3d454b`,
        display: `minimal-ui`,
        icon: `static/logo.png`,
        cache_busting_mode: 'none'
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-sitemap`,
    //'gatsby-plugin-draft',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        globPatterns: ['*/**'],
        directoryIndex: 'index.html',
      }
    },
    /* https://www.gatsbyjs.org/packages/gatsby-plugin-webpack-bundle-analyzer/ */
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        disable: true ,
        production: false
      },
    },
  ],
}
