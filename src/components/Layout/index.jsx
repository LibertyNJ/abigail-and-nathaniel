import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../Footer';
import Navigation from '../Navigation';

import './style.scss';

export default class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render = () => {
    return (
      <>
        <Navigation id="navigation" />
        <main style={{ marginTop: '72px' }}>{this.props.children}</main>
        <Footer />
      </>
    );
  };
}
