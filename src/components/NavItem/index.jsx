'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Nav } from 'react-bootstrap';

import './style.scss';

export default class NavItem extends React.PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    id: PropTypes.string,
  };

  state = {
    isActive: false,
  };

  componentDidMount = () => {
    this.section = document.querySelector(this.props.href);
    this.navigation = document.querySelector('#navigation');
    this.setSectionBoundaries();
    this.setIsActive();
    this.listenForScroll();
    this.listenForResize();
    this.forceUpdate();
  };

  listenForScroll = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    this.setIsActive();
  };

  setIsActive = () => {
    this.setState({ isActive: this.isSectionInWindow() ? true : false });
  };

  isSectionInWindow = () => {
    return (
      window.scrollY >= this.sectionTop && window.scrollY < this.sectionBottom
    );
  };

  listenForResize = () => {
    window.addEventListener('resize', this.handleResize);
  };

  handleResize = () => {
    this.setSectionBoundaries();
  };

  setSectionBoundaries = () => {
    this.sectionTop = this.section.offsetTop - this.navigation.offsetHeight;
    this.sectionBottom = this.sectionTop + this.section.offsetHeight;
  };

  handleClick = event => {
    event.preventDefault();
    this.scrollToSectionTop();
  };

  scrollToSectionTop = () => {
    window.scrollTo({
      top: this.sectionTop,
      behavior: 'smooth',
    });
  };

  render = () => {
    const { children, className, href, id } = this.props;
    return (
      <Nav.Item as="li" className={className} id={id}>
        <Nav.Link
          active={this.state.isActive}
          href={href}
          onClick={this.handleClick}
        >
          {children}
        </Nav.Link>
      </Nav.Item>
    );
  };
}
