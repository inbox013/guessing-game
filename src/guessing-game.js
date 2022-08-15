class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.maxim = max;
    this.minim = min;
  }

  guess() {
    this.middle = (this.maxim + this.minim) / 2;
    return Math.round(this.middle);
  }

  lower() {
    this.maxim = Math.round(this.middle);
  }

  greater() {
    this.minim = Math.round(this.middle);
  }
}

module.exports = GuessingGame;
