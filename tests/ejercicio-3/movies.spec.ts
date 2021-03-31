import 'mocha';
import { expect } from 'chai';
import { MovieCollection } from
  '../../src/ejercicio-3/movies';

describe('MovieCollection methods test', () => {
  const mov1 = {
    title: 'Movie1', year: 2011, director: 'Director1',
    genre: 'Horror', runtime: 90,
  };
  const mov2 = {
    title: 'Movie2', year: 2022, director: 'Director2',
    genre: 'Horror', runtime: 90,
  };
  const mov3 = {
    title: 'Movie3', year: 2033, director: 'Director3',
    genre: 'Horror', runtime: 90,
  };
  const mov4 = {
    title: 'Movie4', year: 2044, director: 'Director4',
    genre: 'Horror', runtime: 90,
  };

  const movieCollInstance = new MovieCollection([mov1, mov2, mov3, mov4]);
  it('movieCollInstance is expected to be able to add new elements', () => {
    movieCollInstance.add(mov4);
    expect(movieCollInstance.getCollection().length).to.be.equal(5);
  });
  it('movieCollInstance is expected to be able to remove elements', () => {
    movieCollInstance.remove(2);
    expect(movieCollInstance.getCollection().length).to.be.equal(4);
  });
  it('movieCollInstance is expected to be able to search by title', () => {
    expect(movieCollInstance.search('Title', 'Movie1')[0].title)
      .to.be.equal('Movie1');
  });
  it('movieCollInstance is expected to be able to search by genre', () => {
    expect(movieCollInstance.search('genre', 'Horror').length)
      .to.be.equal(4);
  });
  it('movieCollInstance is expected to be able to search by runtime', () => {
    expect(movieCollInstance.search('runtime', 90).length)
      .to.be.equal(4);
  });
  it('movieCollInstance is expected to be able to search by director', () => {
    expect(movieCollInstance.search('director', 'Director1').length)
      .to.be.equal(1);
  });
  it('movieCollInstance is expected to be able to search by year', () => {
    expect(movieCollInstance.search('year', 2011).length)
      .to.be.equal(1);
  });
  it('movieCollInstance is expected to not be able to search by distributor',
    () => {
      expect(movieCollInstance.search('distributor', 'Dist1').length)
        .to.be.equal(0);
    });
});
