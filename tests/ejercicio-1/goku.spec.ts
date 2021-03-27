import 'mocha';
import { expect } from 'chai';
import { Goku } from '../../src/ejercicio-1/goku';

describe('Goku methods tests', () => {
  const kakarot = new Goku();
  it('Goku instance is expected to be correctly initialized', () => {
    expect(kakarot.getName()).to.deep.equal('Son Goku');
    expect(kakarot.getHeight()).to.equal(1.75);
    expect(kakarot.getWeight()).to.equal(62);
    expect(kakarot.getAttack()).to.equal(300);
    expect(kakarot.getDefense()).to.equal(300);
    expect(kakarot.getSpeed()).to.equal(200);
    expect(kakarot.getOriginComic()).to.equal('Grand Finale, Dr. Slump');
    expect(kakarot.getDebutDate().getFullYear()).to.equal(1984);
    expect(kakarot.getPowerLevel()).to.equal(9001);
  });
  it('Goku is expected to say: ...And this is to go... EVEN FURTHER BEYOND!',
    () => {
      expect(kakarot.talk()).to.deep.
        equal('...And this is to go... EVEN FURTHER BEYOND!');
    });
  it('Goku instance is expected to change when using setters', () => {
    kakarot.setName('Vegeta');
    expect(kakarot.getName()).to.deep.equal('Vegeta');
    kakarot.setHeight(1.70);
    expect(kakarot.getHeight()).to.equal(1.70);
    kakarot.setWeight(77);
    expect(kakarot.getWeight()).to.equal(77);
    kakarot.setAttack(80);
    expect(kakarot.getAttack()).to.equal(80);
    kakarot.setDefense(90);
    expect(kakarot.getDefense()).to.equal(90);
    kakarot.setSpeed(100);
    expect(kakarot.getSpeed()).to.equal(100);
    kakarot.setPowerLevel(8999);
    expect(kakarot.getPowerLevel()).to.equal(8999);
  });
});
