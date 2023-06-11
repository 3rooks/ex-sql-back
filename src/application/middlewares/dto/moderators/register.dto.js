import ajv from '#lib/ajv.js';
import { Type } from '@sinclair/typebox';
import { emailDTOSchema, passwordDTOSchema } from '../dto.js';

export const moderatorDTOSchema = Type.Object(
    {
        email: emailDTOSchema,
        password: passwordDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchema = ajv.compile(moderatorDTOSchema);

export const moderatorDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};
