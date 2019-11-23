import PropTypes from 'prop-types';
import React from 'react';

import getTimeRemaining from './get-time-remaining';
import Segment from './Segment';

import { reduceClassName } from '../../util';

export default class Countdown extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    SegmentClassName: PropTypes.string,
    id: PropTypes.string,
    targetDate: PropTypes.instanceOf(Date),
  };

  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  componentDidMount = () => {
    this.setTickInterval();
    this.tick();
  };

  setTickInterval = () => {
    const MILLISECONDS_IN_A_SECOND = 1000;
    this.tickInterval = setInterval(this.tick, MILLISECONDS_IN_A_SECOND);
  };

  tick = () => {
    const timeRemaining = getTimeRemaining(this.props.targetDate);
    this.setState({ ...timeRemaining });

    if (this.isPastTargetDate()) {
      this.clearTickInterval();
    }
  };

  isPastTargetDate() {
    const targetUnixMilliseconds = this.props.targetDate.getTime();
    const currentUnixMilliseconds = Date.now();
    return targetUnixMilliseconds < currentUnixMilliseconds;
  }

  componentWillUnmount = () => {
    this.clearTickInterval();
  };

  clearTickInterval = () => {
    clearInterval(this.tickInterval);
  };

  render = () => {
    const BASE_CLASS_NAME = 'bg-white d-flex justify-content-around p-2';
    const { className, SegmentClassName, id } = this.props;
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div className={reduceClassName(BASE_CLASS_NAME, className)} id={id}>
        <Segment className={SegmentClassName} label="Days">
          {days}
        </Segment>
        <Segment className={SegmentClassName} label="Hours">
          {hours}
        </Segment>
        <Segment className={SegmentClassName} label="Minutes">
          {minutes}
        </Segment>
        <Segment className={SegmentClassName} label="Seconds">
          {seconds}
        </Segment>
      </div>
    );
  };
}
