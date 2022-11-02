const request = require('supertest');

const app = require('../lib/app');

const { signs } = require('../lib/zodiac-data.js');
// const { hSigns } = require('../lib/horoscope-data.js');

describe('signs routes', () => {
  it('/zodiac should return a list of zodiac signs with their names and ids', async () => {
    const res = await request(app).get('/zodiac');
    const expected = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/:id should return zodiac sign detail', async () => {
    const res = await request(app).get('/zodiac/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });
});

describe('hSigns routes', () => {
  it('/horoscopes/:sign should return horoscope by sign', async () => {
    const res = await request(app).get('/horoscopes/aries');
    const aries = {
      id: '2',
      sign: 'aries',
      horoscope: 'Pet many cats',
    };
    expect(res.body).toEqual(aries.horoscope);
  });
});
