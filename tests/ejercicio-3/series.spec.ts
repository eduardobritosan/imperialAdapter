import 'mocha';
import { expect } from 'chai';
import { SeriesCollection } from
  '../../src/ejercicio-3/series';

describe('SeriesCollection methods test', () => {
  const ser1 = {
    title: 'Series1', year: 2011, director: 'Director1',
    genre: 'Horror', episodes: 12, seasons: 3,
  };
  const ser2 = {
    title: 'Series2', year: 2011, director: 'Director2',
    genre: 'Horror', episodes: 12, seasons: 3,
  };
  const ser3 = {
    title: 'Series3', year: 2033, director: 'Director3',
    genre: 'Horror', episodes: 12, seasons: 3,
  };
  const ser4 = {
    title: 'Series4', year: 2044, director: 'Director4',
    genre: 'Horror', episodes: 12, seasons: 3,
  };

  const seriesCollInstance = new SeriesCollection([ser1, ser2, ser3, ser4]);
  it('seriesCollInstance is expected to be able to add new elements', () => {
    seriesCollInstance.add(ser4);
    expect(seriesCollInstance.getCollection().length).to.be.equal(5);
  });
  it('seriesCollInstance is expected to be able to remove elements', () => {
    seriesCollInstance.remove(2);
    expect(seriesCollInstance.getCollection().length).to.be.equal(4);
  });
  it('seriesCollInstance is expected to be able to search by title', () => {
    expect(seriesCollInstance.search('Title', 'Series1')[0].title)
      .to.be.equal('Series1');
  });
  it('seriesCollInstance is expected to be able to search by year', () => {
    expect(seriesCollInstance.search('year', 2011).length)
      .to.be.equal(2);
  });
  it('seriesCollInstance is expected to be able to search by genre', () => {
    expect(seriesCollInstance.search('genre', 'Horror').length)
      .to.be.equal(4);
  });
  it('seriesCollInstance is expected to be able to search by director', () => {
    expect(seriesCollInstance.search('director', 'Director1').length)
      .to.be.equal(1);
  });
  it('seriesCollInstance is expected to be able to search by seasons', () => {
    expect(seriesCollInstance.search('seasons', 3).length)
      .to.be.equal(4);
  });
  it('seriesCollInstance is expected to be able to search by episodes', () => {
    expect(seriesCollInstance.search('episodes', 12).length)
      .to.be.equal(4);
  });
  it('seriesCollInstance is expected to not be able to search by distributor',
    () => {
      expect(seriesCollInstance.search('distributor', 'Dist1').length)
        .to.be.equal(0);
    });
});
