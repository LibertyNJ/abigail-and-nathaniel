import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import IconButton from '../components/IconButton';
import MajorSection from '../components/MajorSection';

export default function COVID19({ mediumBreakpoint }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "backgrounds/covid-19.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const backgroundOverlay = mediumBreakpoint
    ? 'linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75))'
    : 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0))';

  return (
    <MajorSection
      backgroundImage={data.file.childImageSharp.fluid}
      backgroundOverlay={backgroundOverlay}
      className="d-flex flex-column"
      heading="COVID-19"
      id="covid-19"
      style={{ backgroundPosition: '25% 50%' }}
    >
      <Container className="d-flex flex-column flex-grow-1">
        <Row className="flex-grow-1">
          <Col
            className="d-flex flex-column justify-content-center"
            md={{ span: 6, offset: 6 }}
          >
            <section className="mb-3">
              <p>
                We want to ensure a safe and healthy experience for everyone who
                joins us in celebration our marriage. In support of that effort,
                we ask you to <em>carefully</em> read the information below.
              </p>
              <h3>All guests</h3>
              <p>
                The Governor of New York has recently put forth general safety
                guidelines for weddings and catered events occurring on or after
                March 15, 2021. The venue and all guests must abide by the
                following rules:
              </p>
              <ul>
                <li>
                  Venues are restricted to 50% capacity, with no more than 150
                  people per event.
                </li>
                <li>All patrons must be tested prior to the event.</li>
                <li>
                  Sign-in with contact information required to assist with
                  potential contact tracing.
                </li>
                <li>
                  Venues must notify local health departments of large events,
                  above the social gathering limit, in advance.
                </li>
                <li>
                  Masks will be required at all times except when seated and
                  eating or drinking.
                </li>
                <li>
                  Ceremonial and socially-distanced dancing allowed under strict
                  guidelines.
                </li>
              </ul>
              <p className="mb-0">More details will follow when available.</p>
            </section>
            <section className="mb-3">
              <h3>Out-of-state guests</h3>
              <p>
                There are additional requirements for guests travelling from
                outside of New York State. Please visit the website below for
                details.
              </p>
              <Row>
                <Col xs={6}>
                  <IconButton
                    block
                    href="https://coronavirus.health.ny.gov/covid-19-travel-advisory"
                    icon="globe"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Website
                  </IconButton>
                </Col>
              </Row>
            </section>
            <section>
              <h3>More information</h3>
              <p>
                For more information about COVID-19 and Coronavirus in New York State,
                please visit the NYS Coronavirus website, or call the hotline
                below.
              </p>
              <p>
                NYS Coronavirus Hotline:{' '}
                <a href="tel:+18883643065" style={{ whiteSpace: 'nowrap' }}>
                  (888)364-3065
                </a>
              </p>
              <Row>
                <Col xs={6}>
                  <IconButton
                    block
                    href="https://coronavirus.health.ny.gov/home"
                    icon="globe"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Website
                  </IconButton>
                </Col>
                <Col className="d-md-none" xs={6}>
                  <IconButton block href="tel:+18883643065" icon="phone">
                    Call
                  </IconButton>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </MajorSection>
  );
}
