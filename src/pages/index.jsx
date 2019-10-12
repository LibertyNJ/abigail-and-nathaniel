'use-strict';

import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import '../scripts/font-awesome-icon-library';
import Accommodations from '../sections/Accommodations';
import Explore from '../sections/Explore';
import Home from '../sections/Home';
import Registry from '../sections/Registry';
import Photos from '../sections/Photos';
import Travel from '../sections/Travel';
import Wedding from '../sections/Wedding';

export default class IndexPage extends React.Component {
  state = {
    isUnderMediumBreakpoint: true,
  };

  componentDidMount = () => {
    this.mediumBreakpoint = window.matchMedia('(max-width: 767.98px)');
    this.setState({ isUnderMediumBreakpoint: this.mediumBreakpoint.matches });
    this.listenForMediumBreakpointChange();
  };

  listenForMediumBreakpointChange = () => {
    this.mediumBreakpoint.addListener(this.handleMediumBreakpointChange);
  };

  componentWillUnmount = () => {
    this.stopListeningForMediumBreakpointChange();
  };

  stopListeningForMediumBreakpointChange = () => {
    this.mediumBreakpoint.removeListener(this.handleMediumBreakpointChange);
  };

  handleMediumBreakpointChange = event => {
    this.setState({ isUnderMediumBreakpoint: event.matches });
  };

  render = () => {
    const { isUnderMediumBreakpoint } = this.state;
    return (
      <Layout>
        <SEO title="Abigail & Nathaniel" />
        <Home mediumBreakpoint={isUnderMediumBreakpoint} />
        <Wedding mediumBreakpoint={isUnderMediumBreakpoint} />
        <Accommodations mediumBreakpoint={isUnderMediumBreakpoint} />
        <Travel mediumBreakpoint={isUnderMediumBreakpoint} />
        {/* <Registry mediumBreakpoint={isUnderMediumBreakpoint} /> */}
        <Photos mediumBreakpoint={isUnderMediumBreakpoint} />
        <Explore mediumBreakpoint={isUnderMediumBreakpoint} />
      </Layout>
    );
  };
}
