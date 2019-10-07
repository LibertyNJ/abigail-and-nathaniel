import getTimeRemaining from './get-time-remaining';

describe('getTimeRemaining(targetDate)', () => {
  setGlobalDateNow('2019-07-20T00:59:30');

  test('when passed a Date object, returns an object with remaining time to that date assigned in properties: days, hours, minutes, and seconds', () => {
    const targetDate = new Date('2020-05-30T00:00:00-04:00');
    const expectedObject = {
      days: 314,
      hours: 23,
      minutes: 0,
      seconds: 30,
    };

    expect(getTimeRemaining(targetDate)).toMatchObject(expectedObject);
  });

  test('when passed a Date object set to a time in the past, returns an object with all properties assigned to 0: days, hours, minutes, and seconds', () => {
    const targetDate = new Date('2018-05-30T00:00:00-04:00');
    const expectedObject = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    expect(getTimeRemaining(targetDate)).toMatchObject(expectedObject);
  });
});

function setGlobalDateNow(date) {
  global.Date.now = () => new Date(date).getTime();
}
