export default class Jupiter {
  constructor(myAge) {
    this.jupiterYear = 11.86;
    this.myAge = myAge;
    this.jupiterAge = 0;
  }

  ageCalc() {
    return this.jupiterAge += Math.floor((this.myAge / this.jupiterYear));
  }
}