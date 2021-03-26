import 'mocha';
import { expect } from 'chai';
import { MockComicFighter } from '../../src/ejercicio-1/mockComicFighter';

describe('MockComicFighter methods tests', () => {
  const date = new Date(1999, 6, 17);
  const mockomic = new MockComicFighter('Mockomic', 1.77, 117, 20, 30, 10,
    'Fakeman', date);
  it('mockomic is expected to be correctly initialized', () => {
    expect(mockomic.getName()).to.deep.equal('Mockomic');
    expect(mockomic.getHeight()).to.equal(1.77);
    expect(mockomic.getWeight()).to.equal(117);
    expect(mockomic.getAttack()).to.equal(20);
    expect(mockomic.getDefense()).to.equal(30);
    expect(mockomic.getSpeed()).to.equal(10);
    expect(mockomic.getOriginComic()).to.equal('Fakeman');
    expect(mockomic.getDebutDate().getFullYear()).to.equal(1999);
  });
  it('mockomic is expected to say: I\'m Mockomic I really don\'t exist', () => {
    expect(mockomic.talk()).to.deep.
      equal('I\'m Mockomic I really don\'t exist');
  });
  it('mockomic is expected to change when using setters', () => {
    mockomic.setName('Mockomicer');
    expect(mockomic.getName()).to.deep.equal('Mockomicer');
    mockomic.setHeight(1.99);
    expect(mockomic.getHeight()).to.equal(1.99);
    mockomic.setWeight(99);
    expect(mockomic.getWeight()).to.equal(99);
    mockomic.setAttack(30);
    expect(mockomic.getAttack()).to.equal(30);
    mockomic.setDefense(40);
    expect(mockomic.getDefense()).to.equal(40);
    mockomic.setSpeed(50);
    expect(mockomic.getSpeed()).to.equal(50);
    mockomic.setOriginComic('Fakewoman');
    expect(mockomic.getOriginComic()).to.equal('Fakewoman');
    const date2 = new Date(1998, 6, 17);
    mockomic.setDebutDate(date2);
    expect(mockomic.getDebutDate().getFullYear()).to.equal(1998);
  });
});
