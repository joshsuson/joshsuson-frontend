const dotenv = require("dotenv")
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
dotenv.config({ path: ".env" })

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
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
