import { emailType, passwordType, roleType } from '#constants/dto.js';
import { Type } from '@sinclair/typebox';

export const registerModSchema = Type.Object(
    {
        email: emailType,
        password: passwordType,
        role: roleType
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

export const loginModSchema = Type.Object(
    {
        email: emailType,
        password: passwordType
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);
