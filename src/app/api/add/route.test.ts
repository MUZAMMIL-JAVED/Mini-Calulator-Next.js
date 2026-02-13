import { POST } from './route';
import { NextRequest } from 'next/server';

describe('POST /api/add', () => {
  it('should return correct sum when valid body is passed', async () => {
    const request = new NextRequest('http://localhost:3000/api/add', {
      method: 'POST',
      body: JSON.stringify({ a: 2, b: 3 }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({ result: 5 });
  });

  it('should return error when invalid input is passed', async () => {
    const request = new NextRequest('http://localhost:3000/api/add', {
      method: 'POST',
      body: JSON.stringify({ a: '2', b: 3 }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({ error: 'Invalid input' });
  });

  it('should return error when missing parameters', async () => {
    const request = new NextRequest('http://localhost:3000/api/add', {
      method: 'POST',
      body: JSON.stringify({ a: 2 }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({ error: 'Invalid input' });
  });
});
