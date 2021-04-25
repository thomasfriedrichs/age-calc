import Mercury from '../src/js/Mercury.js';

describe('Mercury', () => {
  
  test('It should instantiate a new mercury object', () => {
    const newMercury = new Mercury();
    expect(newMercury).toBeDefined();
  });

  test('It should instantiate the Mercury object with a year value', () => {
    const newMercury = new Mercury();
    expect(newMercury.murcYear).toEqual(0.24);
  });

  test('it should return my age in mercury years', () => {
    const newMercury = new Mercury(25);
    newMercury.ageCalc();
    expect(newMercury.mercuryAge).toEqual(104);
  });

  test('it should return how many years i have left on mercury', () => {
    const newMercury = new Mercury(25,80);
    newMercury.ageCalc();
    newMercury.yearsLeftCalculator();
    expect(newMercury.yearsLeft).toEqual(-24);
  });

  test('it should return how many years you are past your life expectancy', () => {
    const newMercury = new Mercury(25,80);
    newMercury.ageCalc();
    newMercury.yearsPastCalculator();
    expect(newMercury.yearsPast).toEqual(24);
  });
});