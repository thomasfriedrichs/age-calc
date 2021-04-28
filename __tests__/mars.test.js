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

  test('it should return how many years i have left on mars', () => {
    const newMars = new Mars(25,80);
    newMars.ageCalc();
    newMars.yearsLeftCalculator();
    expect(newMars.yearsLeft).toEqual(67);
  });

  test('it should return how many years you are past your life expectancy', () => {
    const newMars = new Mars(25,80);
    newMars.ageCalc();
    newMars.yearsPastCalculator();
    expect(newMars.yearsPast).toEqual(-67);
  }); 

  test('it should return how many years you have left on mars', () => {
    const newMars = new Mars(25,80);
    newMars.ageCalc();
    newMars.timeLeft();
    expect(newMars.timeLeft()).toEqual(78);
    });

    test('it should return how many years you are past life expectancy on mars', () => {
      const newMars = new Mars(25,1);
      newMars.ageCalc();
      newMars.timeLeft();
      expect(newMars.timeLeft()).toEqual(1);
      });
});

