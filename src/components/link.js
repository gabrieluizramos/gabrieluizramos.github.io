import React from 'react';

const targetExtraProps = {
    _blank: {
        rel: 'noopener noreferrer'
    }
};

const Link = ({ href, target, children }) => (
    <a href={href} target={target} {...targetExtraProps[target]}>{children}</a>
);

export default Link;