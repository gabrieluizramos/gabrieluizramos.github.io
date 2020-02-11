import React from 'react';

import Reset from './reset';
import Wrapper from './wrapper';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Reset />
    <Header />
    <hr />
    <Wrapper>
      {children}
    </Wrapper>
    <hr />
    <Footer />
  </>
);

export default Layout;
