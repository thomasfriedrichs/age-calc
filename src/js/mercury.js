export default class Mercury {
  constructor(myAge, lifeExpectancy) {
    this.murcYear = 0.24;
    this.myAge = myAge;
    this.mercuryAge = 0;
    this.lifeExpectancy = lifeExpectancy;
    this.yearsLeft;
    this.yearsPast;
  }

  ageCalc() {
    return this.mercuryAge += Math.floor((this.myAge / this.murcYear));
  }
  
  yearsLeftCalculator() {
    return this.yearsLeft = (this.lifeExpectancy - this.mercuryAge);
  }

  yearsPastCalculator() {
    return this.yearsPast = (this.mercuryAge - this.lifeExpectancy);
  }
}