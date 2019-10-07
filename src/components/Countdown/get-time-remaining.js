const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

const MILLISECONDS_PER_MINUTE = MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE;
const MILLISECONDS_PER_HOUR = MILLISECONDS_PER_MINUTE * MINUTES_PER_HOUR;
const MILLISECONDS_PER_DAY = MILLISECONDS_PER_HOUR * HOURS_PER_DAY;

export default function getTimeRemaining(targetDate) {
  const milliseconds = calculateMillisecondsUntilDate(targetDate);
  return !isTimeRemaining(milliseconds)
    ? {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    : {
        days: convertMillisecondsToWholeDays(milliseconds),
        hours: calculateWholeHoursRemainingUntilNextDay(milliseconds),
        minutes: calculateWholeMinutesRemainingUntilNextHour(milliseconds),
        seconds: calculateWholeSecondsRemainingUntilNextMinute(milliseconds),
      };
}

function calculateMillisecondsUntilDate(date) {
  const targetMilliseconds = date.getTime();
  const currentMilliseconds = Date.now();
  return targetMilliseconds - currentMilliseconds;
}

function isTimeRemaining(milliseconds) {
  return milliseconds > 0;
}

function convertMillisecondsToWholeDays(milliseconds) {
  return Math.floor(milliseconds / MILLISECONDS_PER_DAY);
}

function calculateWholeHoursRemainingUntilNextDay(milliseconds) {
  const hours = Math.floor(milliseconds / MILLISECONDS_PER_HOUR);
  return hours % HOURS_PER_DAY;
}

function calculateWholeMinutesRemainingUntilNextHour(milliseconds) {
  const minutes = Math.floor(milliseconds / MILLISECONDS_PER_MINUTE);
  return minutes % MINUTES_PER_HOUR;
}

function calculateWholeSecondsRemainingUntilNextMinute(milliseconds) {
  const seconds = Math.floor(milliseconds / MILLISECONDS_PER_SECOND);
  return seconds % SECONDS_PER_MINUTE;
}
