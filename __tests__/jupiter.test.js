import Jupiter from '../src/js/jupiter.js';

describe('Jupiter', () => {
  
  test('it should instantiate a jupiter object with a year value of 11.68', () => {
    const newJupiter = new Jupiter();
    expect(newJupiter.jupiterYear).toEqual(11.86);
  });

  test('it should return my age in jupiter years', () => {
    const newJupiter = new Jupiter(25);
    newJupiter.ageCalc();
    expect(newJupiter.jupiterAge).toEqual(2);
  });

});