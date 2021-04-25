export default class Mars {
  constructor(myAge, lifeExpectancy) {
    this.marsYear = 1.88;
    this.myAge = myAge;
    this.marsAge = 0;
    this.yearsLeft;
    this.lifeExpectancy = lifeExpectancy;
  }

  ageCalc() {
    return this.marsAge += Math.floor((this.myAge / this.marsYear));
  }

  yearsLeftCalculator() {
    return this.yearsLeft = (this.lifeExpectancy - this.marsAge);
  }
}