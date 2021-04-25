import Venus from '../src/js/venus.js';

describe ('Venus', () => {

  test('it should instantiate a venus object with a year value');
  const newVenus = new Venus();
  expect(newVenus).toEqual(0.62);
});