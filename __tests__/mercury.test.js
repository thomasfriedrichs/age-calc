import Mercury from '../src/js/Mercury.js';

describe('Mercury', () => {
  test('It should instantiate a new mercury object', () => {
    const newMercury = new Mercury();
    expect(newMercury).toBeDefined();
  });
});