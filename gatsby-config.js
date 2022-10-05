module.exports = {
  siteMetadata: {
    title: "Ethan Fann"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ethan Fann",
        short_name: "ethanfann.com",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon2.png"
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-osano`,
      options: {
        customerId: '1t0AvyuRhBFceA1OUG',
        ccid: '7e28edbe-b626-414e-ba2e-4d7e1d6939e1',
        includeInDevelopment: false,
      },
    }
  ]
};
