import Venus from '../src/js/venus.js';

describe ('Venus', () => {

  test('it should instantiate a venus object with a year value', () => {
    const newVenus = new Venus();
    expect(newVenus.year).toEqual(0.62);
  });

  test('it should return my age in venus years', () => {
    const newVenus = new Venus();
    newVenus.ageCalc();
    expect(venusAge).toEqual(40);
  });
});