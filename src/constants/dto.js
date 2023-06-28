import { Type } from '@sinclair/typebox';
import { ROLES } from './roles.js';

export const emailType = Type.String({
    format: 'email',
    errorMessage: {
        type: '${0#} should be a string',
        format: '${0#} must comply RFC 5322'
    }
});

export const roleType = Type.Union(
    [
        Type.Literal(ROLES[0], {
            errorMessage: {
                type: '${0#} must be string',
                const: '${0#} does not match the first role'
            }
        }),
        Type.Literal(ROLES[1], {
            errorMessage: {
                type: '${0#} must be string',
                const: '${0#} does not match the second role'
            }
        }),
        Type.Literal(ROLES[2], {
            errorMessage: {
                type: '${0#} must be string',
                const: '${0#} does not match the thirth role'
            }
        })
    ],
    {
        errorMessage: {
            anyOf: '${0#} must be a valid role'
        }
    }
);

export const passwordType = Type.String({
    format: 'password',
    minLength: 8,
    maxLength: 20,
    errorMessage: {
        type: '${0#} should be a string',
        format: '${0#} must have a lowercase, an uppercase and a number',
        minLength: '${0#} must have at least 8 letters',
        maxLength: '${0#} must have a maximum of 20 letters'
    }
});

export const nameType = Type.String({
    minLength: 2,
    maxLength: 50,
    errorMessage: {
        type: '${0#} must be a string',
        minLength: '${0#} must have at least 2 letters',
        maxLength: '${0#} must have a maximum of 50 letters'
    }
});

export const dateType = Type.Date({
    errorMessage: {
        type: '${0#} must be a date'
    }
});

export const dniType = Type.Number({
    minimum: 1000000,
    maximum: 99999999,
    errorMessage: {
        type: '${0#} should be a number',
        minimum: '${0#} should be above 1000000',
        maximum: '${0#} should be below 99999999'
    }
});
