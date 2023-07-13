import got from 'got';
import { schoolFixture } from '../fixtures/school.fixture.js';
import { getToken } from '../utils/get-token.js';

let token;

beforeAll(async () => {
    token = await getToken();
});

describe('SCHOOL', () => {
    it('Create school successfully', async () => {
        const response = await got.post(
            'http://127.0.0.1:8080/api/v1/schools',
            {
                json: schoolFixture,
                headers: { authorization: `Bearer ${token}` },
                throwHttpErrors: false
            }
        );

        expect(response.statusCode).toBe(201);
    });

    it('Update school succesfully', async () => {
        const response = await got.put('http://127.0.0.1:8080/api/v1/schools', {
            json: schoolFixture,
            headers: { authorization: `Bearer ${token}` },
            throwHttpErrors: false
        });

        expect(response.statusCode).toBe(201);
    });
});
