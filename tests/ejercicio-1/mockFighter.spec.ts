import 'mocha';
import { expect } from 'chai';
import { MockFighter } from '../../src/ejercicio-1/mockFighter';

describe('MockFighter methods tests', () => {
  const mock = new MockFighter('Tester', 1.77, 117, 20, 30, 10);
  it('mock is expected to be correctly initialized', () => {
    expect(mock.getName()).to.deep.equal('Tester');
    expect(mock.getHeight()).to.equal(1.77);
    expect(mock.getWeight()).to.equal(117);
    expect(mock.getAttack()).to.equal(20);
    expect(mock.getDefense()).to.equal(30);
    expect(mock.getSpeed()).to.equal(10);
  });
});
