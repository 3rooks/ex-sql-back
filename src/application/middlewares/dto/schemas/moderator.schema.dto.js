import { emailType, passwordType, roleType } from '#constants/dto.js';
import { Type } from '@sinclair/typebox';

export const registerSchemaDTO = Type.Object(
    {
        email: emailType,
        password: passwordType,
        role: roleType
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Schema format is invalid'
        }
    }
);

export const loginSchemaDTO = Type.Object(
    {
        email: emailType,
        password: passwordType
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Schema format is invalid'
        }
    }
);

export const updateEmailSchemaDTO = Type.Object(
    {
        email: emailType
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Schema format is invalid'
        }
    }
);

export const updatePasswordSchemaDTO = Type.Object(
    {
        oldPassword: passwordType,
        newPassword: passwordType
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Schema format is invalid'
        }
    }
);
