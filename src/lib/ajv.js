import { passwordRegex } from '#constants/regex.js';
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import ajvFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');

ajvFormats(ajv, ['uuid', 'email']);
ajv.addFormat('password', passwordRegex);
ajvErrors(ajv);

export const compareSchemas = (schema, body) => {
    const validateFn = ajv.compile(schema);
    const isValid = validateFn(body);

    return { isValid, validateFn };
};
