import styled from 'styled-components';
import {
  Github,
  Behance,
  Codepen,
  Instagram,
  Twitter,
  Linkedin,
  Unsplash
} from '@styled-icons/boxicons-logos';

import { colors, spacing } from '@variables';

export const Wrapper = styled.div`
  width: 95%;
  max-width: 300px;
  margin: 0 auto;
  margin: -${spacing.double} auto;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  flex: 1;

  a {
    display: block;
    padding: 10px;

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

const GithubIcon = styled(Github)`${iconsStyle}`;
const BehanceIcon = styled(Behance)`${iconsStyle}`;
const CodepenIcon = styled(Codepen)`${iconsStyle}`;
const InstagramIcon = styled(Instagram)`${iconsStyle}`;
const TwitterIcon = styled(Twitter)`${iconsStyle}`;
const LinkedinIcon = styled(Linkedin)`${iconsStyle}`;
const UnsplashIcon = styled(Unsplash)`${iconsStyle}`;

export const icons = {
  github: GithubIcon,
  codepen: CodepenIcon,
  linkedin: LinkedinIcon,
  behance: BehanceIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  unsplash: UnsplashIcon
};
