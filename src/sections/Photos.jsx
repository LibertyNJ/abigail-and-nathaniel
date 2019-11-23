import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import MajorSection from '../components/MajorSection';

export default function Photos() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "photos" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            id
          }
        }
      }
    }
  `);
  const Images = data.allFile.edges.map(({ node }) => (
    <ImageColumn fluid={node.childImageSharp.fluid} key={node.id} />
  ));
  return (
    <MajorSection className="d-flex flex-column" heading="Photos" id="photos">
      <Container className="d-flex flex-column flex-grow-1">
        <Row>{Images}</Row>
      </Container>
    </MajorSection>
  );
}

function ImageColumn({ fluid, ...restProps }) {
  return (
    <Col className="mb-3" md={6} xs={12} {...restProps}>
      <div className="img-thumbnail shadow">
        <Image lassName="img-fluid" fluid={fluid} />
      </div>
    </Col>
  );
}
