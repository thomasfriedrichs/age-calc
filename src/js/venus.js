export default class Venus {
  constructor(myAge) {
    this.venusYear = 0.62;
    this.myAge = myAge;
    this.venusAge = 0;
  }

  ageCalc() {
    return this.venusAge += Math.floor((this.myAge/this.venusYear));
  }
}