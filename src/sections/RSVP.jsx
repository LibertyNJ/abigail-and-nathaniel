import axios from 'axios';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import {
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner,
} from 'react-bootstrap';

import Divider from '../components/Divider';
import IconButton from '../components/IconButton';
import MajorSection from '../components/MajorSection';

export default function RSVP({ mediumBreakpoint }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "backgrounds/rsvp.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const backgroundOverlay = mediumBreakpoint
    ? 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85))'
    : 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))';

  const [alertText, setAlertText] = useState(null);
  const [alertIsDismissible, setAlertIsDismissible] = useState(false);
  const [guests, setGuests] = useState([]);
  const [rsvpCode, setRsvpCode] = useState('');

  const weddingGuestSections = guests.map((guest, index, guests) => (
    <WeddingGuestSection
      alertIsActive={!!alertText}
      guest={guest}
      guestIndex={index}
      guests={guests}
      key={index}
      setGuests={setGuests}
    />
  ));

  const guestIsInvitedToRehearsalDinner = guests.reduce(
    (previousStatus, guest) =>
      previousStatus || guest.isInvitedToRehearsalDinner,
    false
  );

  const rehearsalDinnerGuestSections = guests.map((guest, index, guests) => (
    <RehearsalDinnerGuestSection
      alertIsActive={!!alertText}
      guest={guest}
      guestIndex={index}
      guests={guests}
      key={index}
      setGuests={setGuests}
    />
  ));

  return (
    <MajorSection
      backgroundImage={data.file.childImageSharp.fluid}
      backgroundOverlay={backgroundOverlay}
      className="d-flex flex-column"
      heading="RSVP"
      id="rsvp"
      style={{ backgroundPosition: '0% 0%' }}
    >
      <Container className="d-flex flex-column flex-grow-1 position-relative">
        <Row className="flex-grow-1">
          <Col
            className="d-flex flex-column justify-content-center"
            md={{ span: 6, offset: 6 }}
          >
            {guests.length === 0 ? (
              <Form
                onSubmit={event =>
                  handleCodeFormSubmit(
                    event,
                    setAlertText,
                    rsvpCode,
                    setGuests,
                    setAlertIsDismissible
                  )
                }
              >
                <Form.Group controlId="rsvp-code">
                  <Form.Label>RSVP code</Form.Label>
                  <InputGroup>
                    <Form.Control
                      disabled={alertText}
                      maxLength={6}
                      minLength={6}
                      onChange={event => setRsvpCode(event.target.value)}
                      pattern="[0-9A-Z]{6}"
                      placeholder="ABC123…"
                      required
                      type="text"
                      value={rsvpCode}
                    />
                    <InputGroup.Append>
                      <IconButton
                        disabled={alertText}
                        icon="chevron-right"
                        type="submit"
                      >
                        Submit
                      </IconButton>
                    </InputGroup.Append>
                  </InputGroup>
                  <Form.Text>
                    Six characters, uppercase letters and numbers.
                  </Form.Text>
                </Form.Group>
              </Form>
            ) : (
              <Form
                onSubmit={event =>
                  handleRsvpFormSubmit(
                    event,
                    setAlertText,
                    guests,
                    setAlertIsDismissible,
                    setGuests,
                    setRsvpCode
                  )
                }
              >
                {guests.length > 0 && (
                  <>
                    <h3>RSVP code "{rsvpCode}"</h3>
                    <p>Guests found: {guests.length}</p>
                    <Divider className="mb-3" />
                  </>
                )}
                {guestIsInvitedToRehearsalDinner && (
                  <h4 style={{ fontWeight: 'bold' }}>Wedding and Reception</h4>
                )}
                {weddingGuestSections}
                {guestIsInvitedToRehearsalDinner && (
                  <>
                    <Divider className="mb-3" />
                    <h4 style={{ fontWeight: 'bold' }}>Rehearsal Dinner</h4>
                    <p>In the outdoor pavillion of the&hellip;</p>
                    <p>
                      <b>Phoenicia Diner</b> <br />
                      5681 NY-28 <br />
                      Phoenicia, New York
                    </p>
                    <p>
                      Friday, October 16, 2020 <br />
                      5:30 to 8:30&nbsp;pm
                    </p>
                    <p>
                      Casual attire <br />
                      *Fall jacket and scarf recommended
                    </p>
                    {rehearsalDinnerGuestSections}
                  </>
                )}
                <Divider className="mb-3" />
                <IconButton
                  block
                  disabled={alertText}
                  icon="envelope"
                  size="lg"
                  type="submit"
                >
                  Send
                </IconButton>
              </Form>
            )}
          </Col>
        </Row>
        {alertText && (
          <div
            className="bg-white p-2 position-absolute shadow"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1000,
            }}
          >
            <p className="mb-2">{alertText}</p>
            <div className="text-center">
              {alertIsDismissible ? (
                <IconButton
                  icon="check"
                  onClick={() => {
                    setAlertText(null);
                    setAlertIsDismissible(false);
                  }}
                  type="button"
                >
                  OK
                </IconButton>
              ) : (
                <Spinner animation="border" className="text-primary" />
              )}
            </div>
          </div>
        )}
      </Container>
    </MajorSection>
  );
}

function WeddingGuestSection({
  alertIsActive,
  guest,
  guestIndex,
  guests,
  setGuests,
}) {
  return (
    <fieldset>
      {guests.length > 1 && <legend>Guest #{guestIndex + 1}</legend>}
      <Form.Row>
        <Col xs={3}>
          <Form.Group controlId={`title-${guestIndex}`}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              disabled={alertIsActive}
              name="title"
              onChange={event =>
                handleGuestInputChange(event, guests, guestIndex, setGuests)
              }
              placeholder="Ms…"
              required
              type="text"
              value={guest.title}
            />
          </Form.Group>
        </Col>
        <Col xs={9}>
          <Form.Group controlId={`name-${guestIndex}`}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              disabled={alertIsActive}
              name="name"
              onChange={event =>
                handleGuestInputChange(event, guests, guestIndex, setGuests)
              }
              placeholder="Please enter a name…"
              required
              type="text"
              value={guest.name}
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <fieldset className="mb-3">
        <Form.Check
          checked={guest.isAttendingWedding === true ? true : false}
          custom
          disabled={alertIsActive}
          id={`is-attending-wedding-true-${guestIndex}`}
          inline
          label="Happily accepts"
          name={`isAttendingWedding-${guestIndex}`}
          onChange={event =>
            handleGuestInputChange(event, guests, guestIndex, setGuests)
          }
          required
          type="radio"
          value={true}
        />
        <Form.Check
          checked={guest.isAttendingWedding === false ? true : false}
          custom
          disabled={alertIsActive}
          id={`is-attending-wedding-false-${guestIndex}`}
          inline
          label="Regretfully declines"
          name={`isAttendingWedding-${guestIndex}`}
          onChange={event =>
            handleGuestInputChange(event, guests, guestIndex, setGuests)
          }
          required
          type="radio"
          value={false}
        />
      </fieldset>
      <fieldset className="mb-3">
        <legend style={{ fontSize: '1.125rem' }}>
          Please select your choice of entrée:
        </legend>
        <Form.Check
          checked={guest.entree === 'beef'}
          custom
          disabled={!guest.isAttendingWedding || alertIsActive}
          id={`entree-beef-${guestIndex}`}
          inline
          label="Beef"
          name={`entree-${guestIndex}`}
          onChange={event =>
            handleGuestInputChange(event, guests, guestIndex, setGuests)
          }
          required
          type="radio"
          value="beef"
        />
        <Form.Check
          checked={guest.entree === 'chicken'}
          custom
          disabled={!guest.isAttendingWedding || alertIsActive}
          id={`entree-chicken-${guestIndex}`}
          inline
          label="Chicken"
          name={`entree-${guestIndex}`}
          onChange={event =>
            handleGuestInputChange(event, guests, guestIndex, setGuests)
          }
          required
          type="radio"
          value="chicken"
        />
        <Form.Check
          checked={guest.entree === 'vegan'}
          custom
          disabled={!guest.isAttendingWedding || alertIsActive}
          id={`entree-vegan-${guestIndex}`}
          inline
          label="Vegan"
          name={`entree-${guestIndex}`}
          onChange={event =>
            handleGuestInputChange(event, guests, guestIndex, setGuests)
          }
          required
          type="radio"
          value="vegan"
        />
      </fieldset>
      <Form.Row>
        <Col>
          <Form.Group controlId={`accommodations-${guestIndex}`}>
            <Form.Label>Where are you staying?</Form.Label>
            <Form.Control
              as="textarea"
              disabled={!guest.isAttendingWedding || alertIsActive}
              onChange={event =>
                handleGuestInputChange(event, guests, guestIndex, setGuests)
              }
              placeholder={`Random Inn
123 Any Street
Roxbury, NY 12474…`}
              rows={3}
              value={guest.accommodations}
            />
            <Form.Text>
              Optional: This will help us arrange transportation.
            </Form.Text>
          </Form.Group>
        </Col>
      </Form.Row>
    </fieldset>
  );
}

function RehearsalDinnerGuestSection({
  alertIsActive,
  guest,
  guestIndex,
  guests,
  setGuests,
}) {
  return (
    <fieldset>
      {guests.length > 1 && (
        <legend>
          {guest.name
            ? `${guest.title && `${guest.title} `}${guest.name}`
            : `Guest #${guestIndex + 1}`}
        </legend>
      )}
      <fieldset className="mb-3">
        <legend style={{ fontSize: '1.125rem' }}>
          May we expect the pleasure of your company at the rehearsal dinner?
        </legend>
        <Form.Check
          checked={guest.isAttendingRehearsalDinner === true ? true : false}
          custom
          disabled={!guest.isAttendingWedding || alertIsActive}
          id={`is-attending-rehearsal-dinner-true-${guestIndex}`}
          inline
          label="Yes"
          name={`isAttendingRehearsalDinner-${guestIndex}`}
          onChange={event =>
            handleGuestInputChange(event, guests, guestIndex, setGuests)
          }
          required
          type="radio"
          value={true}
        />
        <Form.Check
          checked={guest.isAttendingRehearsalDinner === false ? true : false}
          custom
          disabled={!guest.isAttendingWedding || alertIsActive}
          id={`is-attending-rehearsal-dinner-false-${guestIndex}`}
          inline
          label="No"
          name={`isAttendingRehearsalDinner-${guestIndex}`}
          onChange={event =>
            handleGuestInputChange(event, guests, guestIndex, setGuests)
          }
          required
          type="radio"
          value={false}
        />
      </fieldset>
    </fieldset>
  );
}

async function handleCodeFormSubmit(
  event,
  setAlertText,
  rsvpCode,
  setGuests,
  setAlertIsDismissible
) {
  event.preventDefault();
  setAlertText('Searching for guests…');

  try {
    const result = await axios.get(
      process.env.GATSBY_RSVP_SERVER_URL + `/guests/?rsvpCode=${rsvpCode}`
    );

    const guests = result.data;

    if (guests.length > 0) {
      setGuests(result.data);
      setAlertText(null);
    } else {
      setAlertText(
        `No guests found for RSVP code "${rsvpCode}". Please check your RSVP code and try again.`
      );
      setAlertIsDismissible(true);
    }
  } catch (error) {
    console.error(error);
    setAlertText('An unexpected error occurred. Please try again.');
    setAlertIsDismissible(true);
  }
}

async function handleRsvpFormSubmit(
  event,
  setAlertText,
  guests,
  setAlertIsDismissible,
  setGuests,
  setRsvpCode
) {
  event.preventDefault();
  setAlertText('Sending RSVP…');

  try {
    await axios.patch(process.env.GATSBY_RSVP_SERVER_URL + '/guests', guests);
    setAlertText('Guests updated. Thank you for your RSVP!');
    setGuests([]);
    setRsvpCode('');
  } catch (error) {
    setAlertText('An unexpected error occurred. Please try again.');
  } finally {
    setAlertIsDismissible(true);
  }
}

function handleGuestInputChange(event, guests, guestIndex, setGuests) {
  const newGuests = guests.map(guest => ({ ...guest }));

  let { name, value } = event.target;

  if (value === 'true') {
    value = true;
  } else if (value === 'false') {
    value = false;
  }

  const nameHyphenIndex = name.indexOf('-');

  if (nameHyphenIndex > -1) {
    name = name.slice(0, nameHyphenIndex);
  }

  newGuests[guestIndex][name] = value;
  setGuests(newGuests);
}
