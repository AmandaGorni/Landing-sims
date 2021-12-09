module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Taxi-page",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-sa-east-1.graphcms.com/v2/ckwxk6ui0076801wc5h877c3i/master",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cabin Condensed`,
          `source sans pro\:300,400,400i,700` 
        ],
        display: 'swap'
      }
    }
  
  ],
};