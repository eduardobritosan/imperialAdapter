import 'mocha';
import { expect } from 'chai';
import { Pikachu } from '../../src/ejercicio-1/pikachu';

describe('Pikachu methods tests', () => {
  const pika = new Pikachu();
  it('Pikachu instance is expected to be correctly initialized', () => {
    expect(pika.getName()).to.deep.equal('Pikachu');
    expect(pika.getHeight()).to.equal(0.4);
    expect(pika.getWeight()).to.equal(6);
    expect(pika.getAttack()).to.equal(55);
    expect(pika.getDefense()).to.equal(30);
    expect(pika.getSpeed()).to.equal(90);
    expect(pika.getDexNumber()).to.equal(25);
  });
  it('Pikachu is expected to say: Pika pika!', () => {
    expect(pika.talk()).to.deep.equal('Pika pika!');
  });
  it('Pikachu instance is expected to change when using setters', () => {
    pika.setName('Raichu');
    expect(pika.getName()).to.deep.equal('Raichu');
    pika.setHeight(1.99);
    expect(pika.getHeight()).to.equal(1.99);
    pika.setWeight(99);
    expect(pika.getWeight()).to.equal(99);
    pika.setAttack(30);
    expect(pika.getAttack()).to.equal(30);
    pika.setDefense(40);
    expect(pika.getDefense()).to.equal(40);
    pika.setSpeed(50);
    expect(pika.getSpeed()).to.equal(50);
    pika.setDexNumber(26);
    expect(pika.getDexNumber()).to.equal(26);
  });
});
