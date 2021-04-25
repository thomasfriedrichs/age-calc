import Calculator from '../src/js/calculator.js';

describe('Calculator', () => {

  test('it should instantiate a calculator object with an age paramater', () => {
    const Calculation = new Calculator(25);
    expect(Calculation.age).toEqual(25);
  });

  test('it should instantiate a calculator object with an age and object parameter', () => {
    const Calculation = new Calculator(25, Mars);
    expect(Calculation.planet).toEqual(Mars);
  });
});