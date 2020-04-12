import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Accommodation from './components/Accommodation';
import { accommodationsData, otherAccommodationsData } from './data';
import MajorSection from '../../components/MajorSection';

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
    : 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0))';

  return (
    <MajorSection
      backgroundImage={data.file.childImageSharp.fluid}
      backgroundOverlay={backgroundOverlay}
      className="d-flex flex-column"
      heading="Accommodations"
      id="accommodations"
      style={{ backgroundPosition: '87.5% 60%' }}
    >
      <Container className="d-flex flex-column flex-grow-1">
        <Row className="flex-grow-1">
          <Col className="d-flex flex-column justify-content-center" md={6}>
            <section className="mb-5">
              <h3>Blocked rooms</h3>
              <p>
                Reserved rooms and shuttle transportation to the Roxbury Barn
                and Estate are available from:
              </p>
              {mapDataToAccommodations(accommodationsData)}
            </section>
            <section>
              <h3>Other accommodations</h3>
              <p>
                Shuttle transportation to the Roxbury Barn and Estate will be
                available from these other establishments:
              </p>
              {mapDataToAccommodations(otherAccommodationsData)}
            </section>
          </Col>
        </Row>
      </Container>
    </MajorSection>
  );
}

function mapDataToAccommodations(data) {
  const accommodationData = [...data];
  const lastAccommodationData = accommodationData.pop();
  const Accommodations = accommodationData.map(accommodation => (
    <Accommodation
      className="mb-4"
      key={accommodation.name}
      {...accommodation}
    />
  ));
  Accommodations.push(
    <Accommodation
      key={lastAccommodationData.name}
      {...lastAccommodationData}
    />
  );
  return Accommodations;
}
