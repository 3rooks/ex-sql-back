import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import ajvFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true });

ajvFormats(ajv);
ajvErrors(ajv, {
    keepErrors: false,
    singleError: true
});

export default ajv;
