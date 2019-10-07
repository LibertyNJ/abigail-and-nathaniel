'use-strict';

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Bold from '../components/Bold';
import IconButton from '../components/IconButton';
import Lead from '../components/Lead';
import MajorSection from '../components/MajorSection';

export default function Accommodations({ mediumBreakpoint }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "backgrounds/accommodations.jpg" }) {
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
    : 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))';
  return (
    <MajorSection
      backgroundImage={data.file.childImageSharp.fluid}
      backgroundOverlay={backgroundOverlay}
      className="d-flex flex-column"
      heading="Accommodations"
      id="accommodations"
      style={{ backgroundPosition: '95% 60%' }}
    >
      <Container className="d-flex flex-column flex-grow-1">
        <Row className="flex-grow-1">
          <Col className="d-flex flex-column justify-content-center" md={6}>
            <Lead>
              Blocked rooms and shuttle transportation to the Roxbury Barn and
              Estate are available from the following two establishments.
            </Lead>
            <section className="mb-3">
              <p>
                <Bold>The Kaatskill Mountain Club</Bold> <br />
                62 Liftside Drive <br />
                Hunter, NY 12442 <br />
                (518)263-5580
              </p>
              <Row>
                <Col xs={6}>
                  <IconButton
                    block
                    href="https://www.huntermtn.com/on-site-lodging/the-kaatskill-mountain-club/"
                    icon="globe"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Visit&nbsp;website
                  </IconButton>
                </Col>
                <Col className="d-md-none" xs={6}>
                  <IconButton block href="tel:+15182635580" icon="phone">
                    Call
                  </IconButton>
                </Col>
              </Row>
            </section>
            <section>
              <p>
                <Bold>The Hunter Inn</Bold> <br />
                7433 Main Street <br />
                Hunter, NY 12442 <br />
                (518)263-3777
              </p>
              <Row>
                <Col xs={6}>
                  <IconButton
                    block
                    href="http://www.hunterinn.com/"
                    icon="globe"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Visit&nbsp;website
                  </IconButton>
                </Col>
                <Col className="d-md-none" xs={6}>
                  <IconButton block href="tel:+15182633777" icon="phone">
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
