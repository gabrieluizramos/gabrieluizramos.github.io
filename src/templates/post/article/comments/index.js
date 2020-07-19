import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Disqus } from 'gatsby-plugin-disqus';

import Divider from '@components/layout/divider';


const Share = ({ title, path, id: identifier }) => {
  const {
    site: { siteMetadata: data }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );

  const { siteUrl } = data;
  const url = `${siteUrl}${path}`;
  const disqus = { url, identifier, title };

  return (
    <>
      <Divider />
      <Disqus config={disqus} />
    </>
  );
};

export default Share;
