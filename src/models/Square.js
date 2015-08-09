class Square {
  constructor(value = 0, score = 0) {
    this.value = value;
    this.score = score;
  }

  add(num = 0) {
    this.value += num;
    let bonus = 1;
    let combo = '';

    if (this.value % 3 == 0 && num != 0) {
      combo += 'fizz';
      bonus *= 3;
    }
    if (this.value % 5 == 0 && num != 0) {
      combo += 'buzz';
      bonus *= 5;
    }

    if ( bonus > 1 ) {
      this.score += this.value * bonus;
      this.value = 0;
    }

    return combo;
  }
}

export default Square;
