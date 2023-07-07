import { ROLES } from '#constants/roles.js';
import got from 'got';
import {
    moderatorFixture,
    updateEmailFixture,
    updatePasswordFixture
} from '../fixtures/moderators/moderator.fixture.js';

let token;

describe('MODERATOR', () => {
    it('Register moderator successfully', async () => {
        const response = await got.post(
            'http://127.0.0.1:8080/api/v1/mods/register',
            {
                json: { ...moderatorFixture, role: ROLES[1] },
                throwHttpErrors: false
            }
        );

        expect(response.statusCode).toBe(201);
    });

    it('Login moderator successfully', async () => {
        const response = await got.post(
            'http://127.0.0.1:8080/api/v1/mods/login',
            { json: moderatorFixture, throwHttpErrors: false }
        );

        token = JSON.parse(response.body).token;

        expect(response.statusCode).toBe(200);
    });

    it('Update moderator email succesfully', async () => {
        const response = await got.post(
            'http://127.0.0.1:8080/api/v1/mods/update-email',
            {
                json: updateEmailFixture,
                headers: { authorization: `Bearer ${token}` },
                throwHttpErrors: false
            }
        );

        expect(response.statusCode).toBe(200);
    });

    it('Update moderator password successfully', async () => {
        const response = await got.post(
            'http://127.0.0.1:8080/api/v1/mods/update-password',
            {
                json: {
                    oldPassword: moderatorFixture.password,
                    newPassword: updatePasswordFixture
                },
                headers: { authorization: `Bearer ${token}` },
                throwHttpErrors: false
            }
        );

        expect(response.statusCode).toBe(200);
    });

    it('Get moderator info successfully', async () => {
        const response = await got.get('http://127.0.0.1:8080/api/v1/mods', {
            headers: { authorization: `Bearer ${token}` },
            throwHttpErrors: false
        });

        expect(response.statusCode).toBe(200);
    });
});
