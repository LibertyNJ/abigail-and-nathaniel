import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../Footer';
import Navigation from '../Navigation';
import './style.scss';

fontAwesomeConfig.autoAddCss = false;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout({ children }) {
  return (
    <>
      <Navigation id="navigation" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
