import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Bold from '../components/Bold';
import Divider from '../components/Divider';
import EmbeddedMap from '../components/EmbeddedMap';
import IconButton from '../components/IconButton';
import MajorSection from '../components/MajorSection';

export default function Travel({ mediumBreakpoint }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "backgrounds/travel.jpg" }) {
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
    : 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))';
  return (
    <MajorSection
      backgroundImage={data.file.childImageSharp.fluid}
      backgroundOverlay={backgroundOverlay}
      className="d-flex flex-column"
      heading="Travel"
      id="travel"
      style={{ backgroundPosition: '0% 100%' }}
    >
      <Container className="d-flex flex-column flex-grow-1">
        <Row className="flex-grow-1">
          <Col
            className="d-flex flex-column justify-content-center"
            md={{ order: 2, span: 6 }}
          >
            <section className="mb-3">
              <h3>By plane</h3>
              <Divider className="my-2 w-50" />
              <section className="mb-3">
                <p>
                  <Bold>Albany International Airport</Bold> <br />
                  Albany Shaker Road <br />
                  Colonie, NY
                </p>
                <Row>
                  <Col xs={6}>
                    <IconButton
                      block
                      href="https://www.google.com/flights?hl=en#flt=/m/286.ALB.2020-05-29*ALB./m/286.2020-05-31;c:USD;e:1;sd:1;t:f"
                      icon="plane"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Find&nbsp;flights
                    </IconButton>
                  </Col>
                  <Col xs={6}>
                    <IconButton
                      block
                      href="https://www.albanyairport.com/"
                      icon="globe"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Visit&nbsp;website
                    </IconButton>
                  </Col>
                </Row>
              </section>
              <section>
                <p>
                  <Bold>New York Stewart International Airport</Bold> <br />
                  1180 1st Street <br />
                  New Windsor, NY 12553
                </p>
                <Row>
                  <Col xs={6}>
                    <IconButton
                      block
                      href="https://www.google.com/flights?hl=en#flt=/m/286.SWF.2020-05-29*SWF./m/286.2020-05-31;c:USD;e:1;sd:1;t:f"
                      icon="plane"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Find&nbsp;flights
                    </IconButton>
                  </Col>
                  <Col xs={6}>
                    <IconButton
                      block
                      href="https://www.swfny.com/"
                      icon="globe"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Visit&nbsp;website
                    </IconButton>
                  </Col>
                </Row>
              </section>
            </section>
            <section className="mb-3 mb-md-0">
              <h3>By car</h3>
              <Divider className="my-2 w-50" />
              <p>
                Roxbury is an hour due west of I-87 via exit 19 taking NY-28
                through Phoenicia, or exit 20 taking NY-23 through Hunter.
              </p>
              <Row>
                <Col xs={6}>
                  <IconButton
                    block
                    href="https://goo.gl/maps/f68Qcu35tdn3Z6q27"
                    icon="car"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Get&nbsp;directions
                  </IconButton>
                </Col>
              </Row>
            </section>
          </Col>
          <Col className="d-flex flex-column" md={{ order: 1, span: 6 }}>
            <EmbeddedMap
              fallback={<EmbeddedMapFallback />}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462828.8958856328!2d-74.82793303515247!3d42.2322276422393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dc5d5ed63b48a5%3A0x2892237fea861a3!2sThe%20Roxbury%20Barn%20%26%20Estate!5e0!3m2!1sen!2sus!4v1568775931824!5m2!1sen!2sus"
              title="Map of The Roxbury Barn & Estate and the surrounding area."
              wrapperClassName="bg-white border border-white mt-md-3 shadow-lg"
            />
          </Col>
        </Row>
      </Container>
    </MajorSection>
  );
}

function EmbeddedMapFallback() {
  return (
    <p>
      <a
        href="https://goo.gl/maps/j4nLmw1rTysf1nBM6"
        rel="noopener noreferrer"
        target="_blank"
      >
        See a map of Roxbury, NY with Google Maps.
      </a>
    </p>
  );
}
