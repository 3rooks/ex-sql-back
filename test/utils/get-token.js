import { ROLES } from '#constants/roles.js';
import got from 'got';

export const setToken = async () => {
    await got.post('http://127.0.0.1:8080/api/v1/mods/register', {
        json: {
            email: 'admin@admin.com',
            password: 'Admin123',
            role: ROLES[1]
        },
        throwHttpErrors: false
    });
};

export const getToken = async () => {
    const response = await got.post('http://127.0.0.1:8080/api/v1/mods/login', {
        json: {
            email: 'admin@admin.com',
            password: 'Admin123'
        },
        throwHttpErrors: false
    });

    return JSON.parse(response.body).token;
};
