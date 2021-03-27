import 'mocha';
import { expect } from 'chai';
import { Combat } from '../../src/ejercicio-1/combat';
import { Goku } from '../../src/ejercicio-1/goku';
import { Pikachu } from '../../src/ejercicio-1/pikachu';
import { Flash } from '../../src/ejercicio-1/flash';
import { IronMan } from '../../src/ejercicio-1/ironMan';

describe('combat methods tests', () => {
  const goku = new Goku();
  const pika = new Pikachu();
  const barry = new Flash();
  const tony = new IronMan();
  const combat = new Combat();
  it('combat is expected to be correctly calc effectiveness', () => {
    expect(combat.effectiveness(goku, pika)).to.equal(2);
    expect(combat.effectiveness(goku, goku)).to.equal(0.5);
    expect(combat.effectiveness(barry, pika)).to.equal(2);
    expect(combat.effectiveness(tony, tony)).to.equal(0.5);
    expect(combat.effectiveness(barry, tony)).to.equal(1);
    expect(combat.effectiveness(goku, barry)).to.equal(1);
  });
  it('combat is expected to say that the winner is Goku', () => {
    expect(combat.start(goku, pika)).to.equal('Son Goku is the winner');
  });
});
