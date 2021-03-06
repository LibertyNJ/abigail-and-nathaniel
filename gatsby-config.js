require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    author: `Nathaniel J. Liberty`,
    description: `Wedding of Abigail Richbourg and Nathaniel J. Liberty at Roxbury Barn on Saturday, May 29, 2021.`,
    title: `Wedding of Abigail & Nathaniel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sass',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abigail & Nathaniel`,
        short_name: `A&N`,
        start_url: `/`,
        background_color: `#72b2ca`,
        theme_color: `#72b2ca`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
