export default class Mars {
  constructor(myAge, lifeExpectancy) {
    this.marsYear = 1.88;
    this.myAge = myAge;
    this.marsAge = 0;
    this.yearsLeft;
    this.lifeExpectancy = lifeExpectancy;
    this.yearsPast;
  }

  ageCalc() {
    return this.marsAge += Math.floor((this.myAge / this.marsYear));
  }

  timeLeft() {
    if ((this.marsAge - this.lifeExpectancy) > 0) {
      return (this.marsAge - this.lifeExpectancy); 
    } else {
      return (this.lifeExpectancy - this.marsAge);
    }
  }
}