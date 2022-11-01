const request = require('supertest');

const app = require('../lib/app');

const { signs } = require('../lib/zodiac-data.js');

describe('signs routes', () => {
  it('/signs should return a list of signs', async () => {
    const res = await request(app).get('/signs');
    const expected = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expected(res.body).toEqual(expected);
  });
});
