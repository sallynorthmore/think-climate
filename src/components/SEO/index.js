/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const SEO = props => {
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          content: data.site.siteMetadata.description,
          name: `description`
        },
        {
          content: title,
          property: `og:title`
        },
        {
          content: data.site.siteMetadata.description,
          property: `og:description`
        },
        {
          content: `website`,
          property: `og:type`
        },
        {
          content: `summary`,
          name: `twitter:card`
        },
        {
          content: data.site.siteMetadata.author,
          name: `twitter:creator`
        },
        {
          content: title,
          name: `twitter:title`
        },
        {
          content: data.site.siteMetadata.description,
          name: `twitter:description`
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                content: keywords.join(`, `),
                name: `keywords`
              }
            : []
        )
        .concat(meta)}
    ></Helmet>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={data => <SEO data={data} {...props} />}
  />
);
