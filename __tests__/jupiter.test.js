import Jupiter from '../src/js/jupiter.js';

describe('Jupiter', () => {
  
  test('it should instantiate a jupiter object with a year value of 11.68', () => {
    const newJupiter = new Jupiter();
    expect(newJupiter.year).toEqual(11.86);
  });
});