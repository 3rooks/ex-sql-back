import { dateType, dniType, nameType } from '#constants/dto.js';
import { Type } from '@sinclair/typebox';

export const personSchemaDTO = Type.Object(
    {
        fullName: nameType,
        dni: dniType,
        birth: dateType,
        legalEntity: nameType,
        school: nameType,
        started: dateType
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);
