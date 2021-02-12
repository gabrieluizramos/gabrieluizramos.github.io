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

import { colors, spacing } from '@variables';

export const List = styled.ul`
  display: flex;
  width: 95%;
  max-width: 400px;
  margin: 0 auto;
  padding: ${spacing.onehalf} 0;
`;

export const Item = styled.li`
  flex: 1;

  a {
    display: block;
    padding: ${spacing.default};

    &:hover {
      svg {
        fill: ${colors.post.color};
      }
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
