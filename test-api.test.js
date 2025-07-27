// test-api.js
const axios = require('axios');

describe('Sample API Test', () => {
  test('should return 200 OK', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status).toBe(200);
  });
});
