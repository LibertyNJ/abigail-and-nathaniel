'use-strict';

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Bold from '../components/Bold';
import Divider from '../components/Divider';
import Lead from '../components/Lead';
import MajorSection from '../components/MajorSection';

export default function Wedding({ mediumBreakpoint }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "backgrounds/wedding.jpg" }) {
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
      className="d-flex flex-column text-center"
      heading="Wedding"
      id="wedding"
      style={{ backgroundPosition: '0%' }}
    >
      <Container className="d-flex flex-column flex-grow-1">
        <Row className="flex-grow-1">
          <Col
            className="d-flex flex-column justify-content-center"
            md={{ span: 6, offset: 6 }}
          >
            <Lead>
              We are getting married <br />
              <Bold>Saturday,&nbsp;May&nbsp;30,&nbsp;2020</Bold>.
            </Lead>
            <section>
              <h3>Where</h3>
              <Divider className="mx-auto my-2 w-25" />
              <p>
                <Bold>The Roxbury Barn and Estate</Bold> <br />
                667 County Highway 41 <br />
                Roxbury, NY 12474
              </p>
            </section>
            <section>
              <h3>When</h3>
              <Divider className="mx-auto my-2 w-25" />
              <ul className="list-unstyled">
                <li>
                  <Bold>Pre-ceremony</Bold>: 4:00&nbsp;pm
                </li>
                <li>
                  <Bold>Ceremony</Bold>: 4:30&nbsp;pm
                </li>
                <li>
                  <Bold>Cocktails</Bold>: 5:00&nbsp;pm
                </li>
                <li>
                  <Bold>Reception</Bold>: 6:00&nbsp;pm
                </li>
              </ul>
            </section>
          </Col>
        </Row>
      </Container>
    </MajorSection>
  );
}
