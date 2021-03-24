const dotenv = require("dotenv")
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
dotenv.config({ path: ".env" })

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Josh Suson`,
    siteUrl: "https://joshsuson.com",
    description: "Development with a purpose",
    twitter: "@joshsuson",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`sora\:200,400,600,800`, `montserrat\:400, 600`],
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "gtxerkzw",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}
