import React from 'react';

import { useSiteMetadata } from 'hooks';

import Container from 'components/Container';

const Footer = () => {
  const { authorName, authorUrl } = useSiteMetadata();

  return (
    <footer>

    </footer>
  );
};

export default Footer;
