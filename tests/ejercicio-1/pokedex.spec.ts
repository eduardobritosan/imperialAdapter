import 'mocha';
import { expect } from 'chai';
import { Pokedex } from '../../src/ejercicio-1/pokedex';
import { Goku } from '../../src/ejercicio-1/goku';
import { Pikachu } from '../../src/ejercicio-1/pikachu';
import { Flash } from '../../src/ejercicio-1/flash';

describe('Pokedex methods tests', () => {
  const goku = new Goku();
  const pika = new Pikachu();
  const flash = new Flash();
  const pokedex = new Pokedex();
  it('pokedex is expected to be correctly add new elements', () => {
    pokedex.add(goku, pika, flash);
    expect(pokedex.print()).to.equal('Son Goku,Pikachu,The Flash');
  });
});
