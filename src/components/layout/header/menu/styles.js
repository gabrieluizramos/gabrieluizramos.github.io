import styled from 'styled-components';
import {
  Github,
  Behance,
  Codepen,
  Instagram,
  Linkedin
} from '@styled-icons/boxicons-logos';

import { colors } from '@variables';

export const Wrapper = styled.div`
  width: 95%;
  max-width: 275px;
  margin: 0 auto;
  margin: -30px auto;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  flex: 1;

  a {
    display: block;
    padding: 15px;

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
const LinkedinIcon = styled(Linkedin)`${iconsStyle}`;

export const icons = {
  github: GithubIcon,
  behance: BehanceIcon,
  codepen: CodepenIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon
};
