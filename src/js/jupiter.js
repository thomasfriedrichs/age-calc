export default class Jupiter {
  constructor(myAge, lifeExpectancy) {
    this.jupiterYear = 11.86;
    this.myAge = myAge;
    this.jupiterAge = 0;
    this.lifeExpectancy = lifeExpectancy;
    this.yearsLeft;
    this.yearsPast;
  }

  ageCalc() {
    return this.jupiterAge += Math.floor((this.myAge / this.jupiterYear));
  }

  yearsLeftCalculator() {
    return this.yearsLeft = (this.lifeExpectancy - this.jupiterAge);
  }

  yearsPastCalculator() {
    return this.yearsPast = (this.jupiterAge - this.lifeExpectancy);
  }
}