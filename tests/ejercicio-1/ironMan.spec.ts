import 'mocha';
import { expect } from 'chai';
import { IronMan } from '../../src/ejercicio-1/ironMan';

describe('IronMan methods tests', () => {
  const tony = new IronMan();
  it('IronMan instance is expected to be correctly initialized', () => {
    expect(tony.getName()).to.deep.equal('Iron Man');
    expect(tony.getHeight()).to.equal(1.85);
    expect(tony.getWeight()).to.equal(102);
    expect(tony.getAttack()).to.equal(100);
    expect(tony.getDefense()).to.equal(100);
    expect(tony.getSpeed()).to.equal(95);
    expect(tony.getOriginComic()).to.equal('Tales of Suspense #39');
    expect(tony.getDebutDate().getFullYear()).to.equal(1963);
    expect(tony.getRealName()).to.equal('Anthony Edward Stark');
  });
  it('IronMan is expected to say: I am Iron Man', () => {
    expect(tony.talk()).to.deep.equal('I am Iron Man');
  });
  it('IronMan instance is expected to change when using setters', () => {
    tony.setName('Iron Patriot');
    expect(tony.getName()).to.deep.equal('Iron Patriot');
    tony.setHeight(1.70);
    expect(tony.getHeight()).to.equal(1.70);
    tony.setWeight(77);
    expect(tony.getWeight()).to.equal(77);
    tony.setAttack(80);
    expect(tony.getAttack()).to.equal(80);
    tony.setDefense(90);
    expect(tony.getDefense()).to.equal(90);
    tony.setSpeed(100);
    expect(tony.getSpeed()).to.equal(100);
    tony.setRealName('Toni Ho');
    expect(tony.getRealName()).to.equal('Toni Ho');
  });
});
