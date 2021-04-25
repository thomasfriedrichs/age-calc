export default class Venus {
  constructor(myAge, lifeExpectancy) {
    this.venusYear = 0.62;
    this.myAge = myAge;
    this.venusAge = 0;
    this.yearsLeft;
    this.lifeExpectancy = lifeExpectancy;
  }

  ageCalc() {
    return this.venusAge += Math.floor((this.myAge/this.venusYear));
  }

  yearsLeftCalculator() {
    return this.yearsLeft = (this.lifeExpectancy - this.venusAge);
  }
}