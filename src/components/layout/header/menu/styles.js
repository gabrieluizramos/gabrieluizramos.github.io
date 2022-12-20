import styled from 'styled-components';

import {
  InfoCircle as About,
  Gear as Setup
} from '@styled-icons/bootstrap';


import {
  Bookmark as Book
} from '@styled-icons/boxicons-regular'

import {
  Github,
  Behance,
  Codepen,
  Twitter,
  Linkedin,
} from '@styled-icons/boxicons-logos';

import { Camera } from '@styled-icons/ionicons-outline';


import { colors, spacing, font, media } from '@variables';

export const List = styled.ul`
  display: flex;
  width: 85%;
  max-width: 450px;
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

    ${media.query.small} {
      padding: ${spacing.half};
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


const AboutIcon = styled(About)`${iconsStyle}`;
const SetupIcon = styled(Setup)`${iconsStyle}`;
const BookIcon = styled(Book)`${iconsStyle}`;
const PhotographyIcon = styled(Camera)`${iconsStyle}`;
const TwitterIcon = styled(Twitter)`${iconsStyle}`;
const LinkedinIcon = styled(Linkedin)`${iconsStyle}`;
const GithubIcon = styled(Github)`${iconsStyle}`;
const CodepenIcon = styled(Codepen)`${iconsStyle}`;
const BehanceIcon = styled(Behance)`${iconsStyle}`;

export const icons = {
  about: AboutIcon,
  setup: SetupIcon,
  book: BookIcon,
  photography: PhotographyIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  codepen: CodepenIcon,
  behance: BehanceIcon,
};
