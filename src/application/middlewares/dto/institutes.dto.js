import ajv from '#lib/ajv.js';
import { Type } from '@sinclair/typebox';
import { idDTOSchema } from './dto.js';

const cartIdParamsDTOSchema = Type.Object(
    {
        cartId: idDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchemaParams = ajv.compile(cartIdParamsDTOSchema);

const cartIdParamsDTO = (req, res, next) => {
    const { cartId } = req.params;
    const isDTOValid = validateSchemaParams({ cartId });

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchemaParams.errors.map((error) => error.message)
        });

    next();
};

export default cartIdParamsDTO;
