import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const targetExtraProps = {
  _blank: {
    rel: 'noopener noreferrer'
  }
};

const Link = ({ href, target = '_blank', children }) => {
  const isInternalLink = href.startsWith('/');
  const LinkComponent = isInternalLink ? GatsbyLink : 'a';
  const props = isInternalLink ? { to: href } : { href, target, ...targetExtraProps[target] };

  return (
    <LinkComponent {...props}>
      {children}
    </LinkComponent>
  );
}

export default Link;
