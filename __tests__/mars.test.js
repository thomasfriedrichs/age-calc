import Mars from '../src/js/mars.js';

describe('Mars', () => {
  
  test('it should instantiate a mars object with a year value of 1.88', () => {
    const newMars = new Mars();
    expect(newMars.year).toEqual(1.88);
  });
});

