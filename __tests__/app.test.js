const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
// const Fave = require('../lib/model/Fave');

describe('breweries-crud-app routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  // beforeEach(async () => {
  //   await Fave.insert({ name: 'Base Camp Brewing', type: 'micro', city: 'Portland', state: 'Oregon' })
  // });

  it('adds a brewery to favorites', () => {
    const newBrew = {id: '1', name: 'Breakside Brewery', type: 'micro', city: 'Portland', state: 'Oregon' };

    return request(app)
      .post('/api/v1/favorites')
      .send(newBrew)
      .then((res) => {

        expect(res.body).toEqual(newBrew);
      })
  })


});
