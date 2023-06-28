import { compareSchemas } from '#lib/ajv.js';
import { personSchemaDTO } from './schemas/person.schema.dto.js';

export class PersonDTO {
    create = (req, res, next) => {
        const { isValid, validateFn } = compareSchemas(
            personSchemaDTO,
            req.body
        );

        if (!isValid)
            return res.status(400).json({
                errors: validateFn.errors.map((error) => error.message)
            });

        next();
    };

    update = () => {};

    delete = () => {};
}
