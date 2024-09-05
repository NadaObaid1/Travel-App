const request = require('supertest');
const app = require('../server/server.js');  

describe('Server Tests', () => {
  let server;

  beforeAll(() => {
    server = app.listen(4000); 
  });

  afterAll(() => {
    server.close();  
  });
  it('should return 200 for the home route', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Nada Travel Planner');  
  }, 10000);
  
});
