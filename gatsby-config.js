module.exports = {
  siteMetadata: {
    siteUrl: "https://mygatsbysitemain55751.gatsbyjs.io/",
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
