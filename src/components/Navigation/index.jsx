'use-strict';

import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavItem from '../NavItem';
import Ampersand from '../SVG/Ampersand';
import './style.scss';

export default class Navigation extends React.Component {
  state = {
    isExpanded: false,
  };

  handleToggle = isExpanded => {
    this.setState({ isExpanded });
  };

  render = () => {
    const { ...restProps } = this.props;
    return (
      <Navbar
        as="nav"
        bg="white"
        className="shadow-sm"
        collapseOnSelect={true}
        expand="md"
        fixed="top"
        onToggle={this.handleToggle}
        {...restProps}
      >
        <Navbar.Brand className="d-md-none">
          Abigail <Ampersand height="1em" /> Nathaniel
        </Navbar.Brand>
        <Navbar.Toggle
          className="border-0"
          onMouseDown={event => event.preventDefault()}
          style={{ width: '46px' }}
        >
          <FontAwesomeIcon icon={this.state.isExpanded ? 'times' : 'bars'} />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav
            as="ul"
            className="align-items-start justify-content-around w-100"
          >
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#wedding">Wedding</NavItem>
            <NavItem href="#accommodations">Accommodations</NavItem>
            <NavItem href="#travel">Travel</NavItem>
            <NavItem href="#registry">Registry</NavItem>
            <NavItem href="#photos">Photos</NavItem>
            <NavItem href="#explore">Explore</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
}
