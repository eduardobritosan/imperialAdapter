import 'mocha';
import { expect } from 'chai';
import { Flash } from '../../src/ejercicio-1/flash';

describe('Flash methods tests', () => {
  const barry = new Flash();
  it('Flash instance is expected to be correctly initialized', () => {
    expect(barry.getName()).to.deep.equal('The Flash');
    expect(barry.getHeight()).to.equal(1.82);
    expect(barry.getWeight()).to.equal(88);
    expect(barry.getAttack()).to.equal(200);
    expect(barry.getDefense()).to.equal(50);
    expect(barry.getSpeed()).to.equal(250);
    expect(barry.getOriginComic()).to.equal('Flashpoint Vol 2 #5');
    expect(barry.getDebutDate().getFullYear()).to.equal(2011);
    expect(barry.getRealName()).to.equal('Bartholomew Henry Allen');
  });
  it('Flash is expected to say: I am the fastest man alive', () => {
    expect(barry.talk()).to.deep.equal('I am the fastest man alive');
  });
  it('Flash instance is expected to change when using setters', () => {
    barry.setName('Johnny Quick');
    expect(barry.getName()).to.deep.equal('Johnny Quick');
    barry.setHeight(1.70);
    expect(barry.getHeight()).to.equal(1.70);
    barry.setWeight(77);
    expect(barry.getWeight()).to.equal(77);
    barry.setAttack(80);
    expect(barry.getAttack()).to.equal(80);
    barry.setDefense(90);
    expect(barry.getDefense()).to.equal(90);
    barry.setSpeed(100);
    expect(barry.getSpeed()).to.equal(100);
    barry.setRealName('Jonathan Chambers');
    expect(barry.getRealName()).to.equal('Jonathan Chambers');
  });
});
