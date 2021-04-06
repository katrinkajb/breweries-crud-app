const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('breweries-crud-app routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  // beforeEach(async () => {
  //   await 
  // });

  it('adds a brewery to favorites', () => {
    const newBrew = {name: 'Breakside Brewery', type: 'micro', city: 'Portland', state: 'Oregon'}

    return request(app)
      .post('/api.v1/breweries')
      .send(newBrew)
      .then((res) => {

        expect(res.body).toEqual(newBrew);
      })
  })

  it.skip('gets a list of all favorites', () => {


    expect().toEqual();
  })

});
