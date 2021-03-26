import 'mocha';
import { expect } from 'chai';
import { MockFighter } from '../../src/ejercicio-1/mockFighter';

describe('MockFighter methods tests', () => {
  const mock = new MockFighter('Mock', 1.77, 117, 20, 30, 10);
  it('mock is expected to be correctly initialized', () => {
    expect(mock.getName()).to.deep.equal('Mock');
    expect(mock.getHeight()).to.equal(1.77);
    expect(mock.getWeight()).to.equal(117);
    expect(mock.getAttack()).to.equal(20);
    expect(mock.getDefense()).to.equal(30);
    expect(mock.getSpeed()).to.equal(10);
  });
  it('mock is expected to say: I\'m Mock I really don\'t exist', () => {
    expect(mock.talk()).to.deep.equal('I\'m Mock I really don\'t exist');
  });
  it('mock is expected to change when using setters', () => {
    mock.setName('Mocker');
    expect(mock.getName()).to.deep.equal('Mocker');
    mock.setHeight(1.99);
    expect(mock.getHeight()).to.equal(1.99);
    mock.setWeight(99);
    expect(mock.getWeight()).to.equal(99);
    mock.setAttack(30);
    expect(mock.getAttack()).to.equal(30);
    mock.setDefense(40);
    expect(mock.getDefense()).to.equal(40);
    mock.setSpeed(50);
    expect(mock.getSpeed()).to.equal(50);
  });
});
