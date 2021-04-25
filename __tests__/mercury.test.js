import Mercury from '../src/js/Mercury.js';

describe('Mercury', () => {
  
  test('It should instantiate a new mercury object', () => {
    const newMercury = new Mercury();
    expect(newMercury).toBeDefined();
  });

  test('It should instantiate the Mercury object with a year value', () => {
    const newMercury = new Mercury();
    expect(newMercury.year).toEqual(0.24);
  });
});