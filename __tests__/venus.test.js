import Venus from '../src/js/venus.js';

describe ('Venus', () => {

  test('it should instantiate a venus object with a year value', () => {
    const newVenus = new Venus();
    expect(newVenus.venusYear).toEqual(0.62);
  });

  test('it should return my age in venus years', () => {
    const newVenus = new Venus(25);
    newVenus.ageCalc();
    expect(newVenus.venusAge).toEqual(40);
  });

  test('it should return how many years i have left on venus', () => {
    const newVenus = new Venus(25, 80);
    newVenus.ageCalc();
    newVenus.yearsLeftCalculator();
    expect(newVenus.yearsLeft).toEqual(40);
  });
});