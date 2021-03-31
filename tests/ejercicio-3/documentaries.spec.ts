import 'mocha';
import { expect } from 'chai';
import { DocumentaryCollection } from
  '../../src/ejercicio-3/documentaries';

describe('DocumentaryCollection methods test', () => {
  const doc1 = {
    title: 'Documentary1', year: 2011, director: 'Director1',
    genre: 'Horror', runtime: 90,
    narrator: 'Narrator1',
  };
  const doc2 = {
    title: 'Documentary2', year: 2022, director: 'Director2',
    genre: 'Horror', runtime: 90,
    narrator: 'Narrator2',
  };
  const doc3 = {
    title: 'Documentary3', year: 2033, director: 'Director3',
    genre: 'Horror', runtime: 90,
    narrator: 'Narrator3',
  };
  const doc4 = {
    title: 'Documentary4', year: 2044, director: 'Director4',
    genre: 'Horror', runtime: 90,
    narrator: 'Narrator4',
  };

  const docCollInstance = new DocumentaryCollection([doc1, doc2, doc3, doc4]);
  it('docCollInstance is expected to be able to add new elements', () => {
    docCollInstance.add(doc4);
    expect(docCollInstance.getCollection().length).to.be.equal(5);
  });
  it('docCollInstance is expected to be able to remove elements', () => {
    docCollInstance.remove(2);
    expect(docCollInstance.getCollection().length).to.be.equal(4);
  });
  it('docCollInstance is expected to be able to search by title', () => {
    expect(docCollInstance.search('Title', 'Documentary1')[0].title)
      .to.be.equal('Documentary1');
  });
  it('docCollInstance is expected to be able to search by runtime', () => {
    expect(docCollInstance.search('runtime', 90).length)
      .to.be.equal(4);
  });
  it('docCollInstance is expected to be able to search by director', () => {
    expect(docCollInstance.search('director', 'Director1').length)
      .to.be.equal(1);
  });
  it('docCollInstance is expected to be able to search by year', () => {
    expect(docCollInstance.search('year', 2011).length)
      .to.be.equal(1);
  });
  it('docCollInstance is expected to be able to search by genre', () => {
    expect(docCollInstance.search('genre', 'Horror').length)
      .to.be.equal(4);
  });
  it('docCollInstance is expected to be able to search by narrator', () => {
    expect(docCollInstance.search('narrator', 'Narrator1').length)
      .to.be.equal(1);
  });
  it('docCollInstance is expected to not be able to search by distributor',
    () => {
      expect(docCollInstance.search('distributor', 'Dist1').length)
        .to.be.equal(0);
    });
  it('docCollInstance is expected to be able to print',
    () => {
      docCollInstance.print();
    });
});
