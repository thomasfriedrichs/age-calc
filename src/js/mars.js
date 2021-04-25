export default class Mars {
  constructor(myAge) {
    this.marsYear = 1.88;
    this.myAge = myAge;
    this.marsAge = 0;
  }

  ageCalc() {
    return this.marsAge += Math.floor((this.myAge / this.marsYear));
  }
}