import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Container } from 'react-bootstrap';

import Countdown from '../components/Countdown';
import MajorSection from '../components/MajorSection';
import Ampersand from '../components/SVG/Ampersand';

export default function Home({ mediumBreakpoint }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "backgrounds/home.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const backgroundOverlay = mediumBreakpoint
    ? 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))'
    : 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 50%)';

  return (
    <MajorSection
      backgroundImage={data.file.childImageSharp.fluid}
      backgroundOverlay={backgroundOverlay}
      className="d-flex flex-column"
      id="home"
      style={{ backgroundPosition: '12.5% 100%' }}
    >
      <Container className="flex-grow-1 flex-shrink-0" fluid>
        <h1
          className="d-none d-md-block display-1 mt-3"
          style={{ marginLeft: '5%' }}
        >
          Abigail <Ampersand height="1em" width="1em" /> Nathaniel
        </h1>
      </Container>
      <Countdown
        className="flex-grow-0"
        targetDate={new Date('2021-05-29T16:00:00-04:00')}
      />
    </MajorSection>
  );
}
