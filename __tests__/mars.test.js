import Mars from '../src/js/mars.js';

describe('Mars', () => {
  
  test('it should instantiate a mars object with a year value of 1.88', () => {
    const newMars = new Mars();
    expect(newMars.marsYear).toEqual(1.88);
  });

  test('it should return my age in mars years', () => {
    const newMars = new Mars(25);
    newMars.ageCalc();
    expect(newMars.marsAge).toEqual(13);
  });
});

