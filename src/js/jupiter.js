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

  timeLeft() {
    if ((this.jupiterAge - this.lifeExpectancy) > 0) {
      return (this.jupiterAge - this.lifeExpectancy); 
    } else {
      return (this.lifeExpectancy - this.jupiterAge);
    }
  }
}