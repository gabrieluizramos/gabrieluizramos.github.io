import styled from 'styled-components';
import {
  Github,
  Behance,
  Codepen,
  Instagram,
  Twitter,
  Linkedin,
  Unsplash,
  Flickr
} from '@styled-icons/boxicons-logos';

import { colors, spacing, font } from '@variables';

export const List = styled.ul`
  display: flex;
  width: 95%;
  max-width: 400px;
  margin: 0 auto;
  padding: ${spacing.onehalf} 0;
`;

export const Item = styled.li`
  flex: 1;
  position: relative;

  a {
    display: block;
    padding: ${spacing.default};

    &:hover {
      svg {
        fill: ${colors.post.color};
      }
    }
  }

  &:after {
    content: attr(data-description);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${font.size.smaller};
    position: absolute;
    opacity: 0;
    transition: .1s ease-in-out;
    left: 0;
    right: 0;
    transform: translateY(-5px);
  }

  &:hover {
    &:after {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const iconsStyle = () => `
  color: ${colors.white};
  display: block;
  transition: .2s ease-in-out;
`;



const TwitterIcon = styled(Twitter)`${iconsStyle}`;
const InstagramIcon = styled(Instagram)`${iconsStyle}`;
const UnsplashIcon = styled(Unsplash)`${iconsStyle}`;
const FlickIcon = styled(Flickr)`${iconsStyle}`;
const LinkedinIcon = styled(Linkedin)`${iconsStyle}`;
const GithubIcon = styled(Github)`${iconsStyle}`;
const CodepenIcon = styled(Codepen)`${iconsStyle}`;
const BehanceIcon = styled(Behance)`${iconsStyle}`;

export const icons = {
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  unsplash: UnsplashIcon,
  flickr: FlickIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  codepen: CodepenIcon,
  behance: BehanceIcon,
};
