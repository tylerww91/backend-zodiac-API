const request = require('supertest');

const app = require('../lib/app');

const { signs } = require('../lib/zodiac-data.js');

describe('signs routes', () => {
  it('/zodiac should return a list of zodiac signs with their names and ids', async () => {
    const res = await request(app).get('/zodiac');
    const expected = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(res.body).toEqual(expected);
  });
});
