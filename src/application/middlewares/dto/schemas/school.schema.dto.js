import { idType, nameType } from '#constants/dto.js';
import { Type } from '@sinclair/typebox';

export const schoolSchemaDTO = Type.Object(
    {
        name: nameType,
        director: nameType,
        locality: nameType,
        province: nameType,
        legalEntity: nameType
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

export const schoolIdSchemaDTO = Type.Object(
    {
        schoolId: idType
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);
