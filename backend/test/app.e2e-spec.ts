import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request, { Response } from 'supertest';
import { AppModule } from '../src/app.module';

describe('App (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/health (GET) should return success message', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect({ success: true, message: 'Service is healthy' });
  });

  it('/products (GET) should return an array of products', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect((res: Response) => {
        if (!Array.isArray(res.body)) throw new Error('Expected body to be an array');
        if (res.body.length === 0) throw new Error('Expected non-empty array');
        const p = res.body[0];
        if (typeof p.id !== 'number' || typeof p.name !== 'string' || typeof p.price !== 'number') {
          throw new Error('Product shape invalid');
        }
      });
  });
});