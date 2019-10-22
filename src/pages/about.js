// import * as React from 'react';
// import { graphql, StaticQuery } from 'gatsby';
// import Layout from '../components/Layout/index';

// const AboutPage = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         page: markdownRemark(frontmatter: { templateKey: { eq: "about" } }) {
//           frontmatter {
//             title
//             hero {
//               background
//               title
//               image {
//                 childImageSharp {
//                   fluid(quality: 85, maxWidth: 2000) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//             body
//           }
//         }
//       }
//     `}
//     render={data => {
//       const page = data.page.frontmatter;

//       if (!page) {
//         return;
//       }
//       return (
//         <Layout>
//           <h1>{page.title}</h1>
//           {page.body}
//         </Layout>
//       );
//     }}
//   />
// );

// export default AboutPage;
