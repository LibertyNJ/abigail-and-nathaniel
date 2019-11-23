import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Lead from '../components/Lead';
import MajorSection from '../components/MajorSection';
import AmazonLogo from '../components/SVG/AmazonLogo';
import PotteryBarnLogo from '../components/SVG/PotteryBarnLogo';
import ZolaLogo from '../components/SVG/ZolaLogo';

export default function Registry({ mediumBreakpoint }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "backgrounds/registry.jpg" }) {
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
      heading="Registry"
      id="registry"
      style={{ backgroundPosition: '7.5% 0%' }}
    >
      <Container className="d-flex flex-column flex-grow-1">
        <Row className="flex-grow-1">
          <Col
            className="d-flex flex-column justify-content-center"
            md={{ span: 6, offset: 6 }}
          >
            <Lead>
              The greatest gift of all is to have you with us to celebrate our
              wedding day; if you would like to give us something more as we
              embark on our journey together, please visit our wedding
              registries using the buttons below.
            </Lead>
            <Button
              block
              className="mb-3"
              href="https://www.amazon.com/wedding/nathaniel-liberty-abigail-richbourg-roxbury-may-2020/registry/2OC9S4LBNCOQW"
              rel="noopener noreferrer"
              size="lg"
              target="_blank"
            >
              <AmazonLogo />
            </Button>
            <Button
              block
              className="mb-3"
              href="https://www.potterybarn.com/registry/znjdf8r5jw/registry-list.html"
              rel="noopener noreferrer"
              size="lg"
              target="_blank"
            >
              <PotteryBarnLogo />
            </Button>
            <Button
              block
              href="https://www.zola.com/registry/abigailandnathanielmay30"
              rel="noopener noreferrer"
              size="lg"
              target="_blank"
            >
              <ZolaLogo />
            </Button>
          </Col>
        </Row>
      </Container>
    </MajorSection>
  );
}
