import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import IconButton from '../components/IconButton';
import MajorSection from '../components/MajorSection';

export default function Explore({ mediumBreakpoint }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "backgrounds/explore.jpg" }) {
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
      heading="Explore"
      id="explore"
      style={{ backgroundPosition: '87.5% 0%' }}
    >
      <Container className="d-flex flex-column flex-grow-1">
        <Row className="flex-grow-1">
          <Col className="d-flex flex-column justify-content-center" md={6}>
            <section className="mb-3">
              <h3>Antiques at Rick's Barn</h3>
              <p>
                Pick through the “largest inventory of antiques in the Catskill
                region”.
              </p>
              <p>
                50061 Route 30 <br />
                Roxbury, NY 12474 <br />
                (607)326-7700
              </p>
              <Row>
                <Col xs={6}>
                  <IconButton
                    block
                    href="http://www.ricksbarn.com"
                    icon="globe"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Visit&nbsp;website
                  </IconButton>
                </Col>
                <Col className="d-md-none" xs={6}>
                  <IconButton block href="tel:+16073267700" icon="phone">
                    Call
                  </IconButton>
                </Col>
              </Row>
            </section>
            <section className="mb-3">
              <h3>Hunter Mountain</h3>
              <p>
                Get back to nature on a hiking trail or get some air on a
                zipline.
              </p>
              <p>
                64 Klein Ave <br />
                Hunter, NY 12442 <br />
                (800)486-8376
              </p>
              <Row>
                <Col xs={6}>
                  <IconButton
                    block
                    href="https://www.huntermtn.com"
                    icon="globe"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Visit&nbsp;website
                  </IconButton>
                </Col>
                <Col className="d-md-none" xs={6}>
                  <IconButton block href="tel:+18004868376" icon="phone">
                    Call
                  </IconButton>
                </Col>
              </Row>
            </section>
            <section className="mb-3">
              <h3>Kirkside Park</h3>
              <p>Stroll along the east branch of the Delaware River.</p>
              <p>
                Kirkside Driveway <br />
                Roxbury, NY 12474 <br />
                (607)326-3722
              </p>
              <Row>
                <Col xs={6}>
                  <IconButton
                    block
                    href="http://roxburyny.com/parks-recreation-historical-preservation-tourism/"
                    icon="globe"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Visit&nbsp;website
                  </IconButton>
                </Col>
                <Col className="d-md-none" xs={6}>
                  <IconButton block href="tel:+16073263722" icon="phone">
                    Call
                  </IconButton>
                </Col>
              </Row>
            </section>
            <section className="mb-3">
              <h3>The Roxbury Arts Center</h3>
              <p>
                Catch a performance or see an exhibit at the Walt Meade Gallery.
              </p>
              <p>
                5025 Vega Mountain Road <br />
                Roxbury, NY 12474 <br />
                (607)326-7908
              </p>
              <Row>
                <Col xs={6}>
                  <IconButton
                    block
                    href="https://www.roxburyartsgroup.org"
                    icon="globe"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Visit&nbsp;website
                  </IconButton>
                </Col>
                <Col className="d-md-none" xs={6}>
                  <IconButton block href="tel:+16073267908" icon="phone">
                    Call
                  </IconButton>
                </Col>
              </Row>
            </section>
            <section>
              <h3>Woodchuck Lodge and Burroughs&nbsp;Memorial&nbsp;Field</h3>
              <p>
                Tour the summer home of John Burroughs, American
                naturalist-essayist of the late 19th and early 20th centuries.
              </p>
              <p>
                1633 Burroughs Memorial Road <br />
                Roxbury, NY 12474
              </p>
              <Row>
                <Col xs={6}>
                  <IconButton
                    block
                    href="https://www.woodchucklodge.org"
                    icon="globe"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Visit&nbsp;website
                  </IconButton>
                </Col>
                <Col className="d-md-none" xs={6}>
                  <IconButton
                    block
                    href="mailto:jbwoodchucklodge@hotmail.com"
                    icon="envelope"
                  >
                    Email
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
