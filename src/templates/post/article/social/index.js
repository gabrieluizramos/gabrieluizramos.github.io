import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Disqus } from 'gatsby-plugin-disqus';

import { colors } from '@variables';

import {
  // Buttons
  FacebookShareButton as FacebookButton,
  LinkedinShareButton as LinkedinButton,
  TwitterShareButton as TwitterButton,
  WhatsappShareButton as WhatsappButton,

  // Icons
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';

import * as S from './styles';

// All social share
const social = [
  { Component: TwitterButton, Icon: TwitterIcon },
  { Component: FacebookButton, Icon: FacebookIcon },
  { Component: WhatsappButton, Icon: WhatsappIcon },
  { Component: LinkedinButton, Icon: LinkedinIcon }
];

const Share = ({ title, path, id: identifier }) => {
  const {
    site: { siteMetadata: data }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            siteUrl
          }
        }
      }
    `
  );

  const { siteUrl, author } = data;
  const url = `${siteUrl}${path}`;
  const disqus = { url, identifier, title };

  return (
    <S.Share>
      <hr />
      <S.Container>
        <S.Icons>
          {social.map(({ Component, Icon }, index) => (
            <S.Icon key={`share_${index}`}>
              <Component url={url} title={`${title} por ${author}`}>
                <Icon size={35} bgStyle={{ fill: colors.terminal.black }} />
              </Component>
            </S.Icon>
          ))}
        </S.Icons>
      </S.Container>
      <Disqus config={disqus} />
    </S.Share>
  );
};

export default Share;
