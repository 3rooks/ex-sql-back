import {
    emailDTOSchema,
    passwordDTOSchema,
    roleDTOSchema
} from '#constants/dto.js';
import ajv from '#lib/ajv.js';
import { Type } from '@sinclair/typebox';

export const moderatorDTOSchema = Type.Object(
    {
        email: emailDTOSchema,
        password: passwordDTOSchema,
        role: roleDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

export const valModSchema = ajv.compile(moderatorDTOSchema);
