import Square   from 'src/models/Square';
import {assert} from 'chai';

describe('Square', () => {
  it('instantiates with default values', () => {
    let s = new Square();
    assert.equal(s.value, 0);
    assert.equal(s.score, 0);
  });

  it('instantiates with defined values', () => {
    let s1 = new Square(20,30);
    assert.equal(s1.value, 20);
    assert.equal(s1.score, 30);

    let s2 = new Square(5);
    assert.equal(s2.value, 5);
    assert.equal(s2.score, 0);

    let s3 = new Square(undefined,44);
    assert.equal(s3.value, 0);
    assert.equal(s3.score, 44);
  });

  it('adds values', () => {
    let s = new Square();
    let c = s.add(2);
    assert.equal(s.value, 2);
    assert.equal(s.score, 0);
    assert.equal(c,'');
  });

  it('throws fizz combos', () => {
    let s1 = new Square(0,1);
    let c1 = s1.add(3);
    assert.equal(s1.value, 0);
    assert.equal(s1.score, 10);
    assert.equal(c1, 'fizz');

    let s2 = new Square(8);
    let c2 = s2.add(1);
    assert.equal(s2.value, 0);
    assert.equal(s2.score, 27);
    assert.equal(c2, 'fizz');
  });

  it('throws buzz combos', () => {
    let s1 = new Square(0,1);
    let c1 = s1.add(5);
    assert.equal(s1.value, 0);
    assert.equal(s1.score, 26);
    assert.equal(c1, 'buzz');

    let s2 = new Square(12);
    let c2 = s2.add(8);
    assert.equal(s2.value, 0);
    assert.equal(s2.score, 100);
    assert.equal(c2, 'buzz');
  });

  it('throws fizzbuzz combos', () => {
    let s1 = new Square(0,1);
    let c1 = s1.add(15);
    assert.equal(s1.value, 0);
    assert.equal(s1.score, 226);
    assert.equal(c1, 'fizzbuzz');

    let s2 = new Square(51);
    let c2 = s2.add(9);
    assert.equal(s2.value, 0);
    assert.equal(s2.score, 900);
    assert.equal(c2, 'fizzbuzz');
  });
});
