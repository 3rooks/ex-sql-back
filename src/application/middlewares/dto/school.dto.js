import { compareSchemas } from '#lib/ajv.js';
import {
    schoolIdSchemaDTO,
    schoolSchemaDTO
} from './schemas/school.schema.dto.js';

export class SchoolDTO {
    params = (req, res, next) => {
        const { isValid, validateFn } = compareSchemas(
            schoolIdSchemaDTO,
            req.params
        );

        if (!isValid)
            return res.status(400).json({
                errors: validateFn.errors.map((error) => error.message)
            });

        next();
    };

    create = (req, res, next) => {
        const { isValid, validateFn } = compareSchemas(
            schoolSchemaDTO,
            req.body
        );

        if (!isValid)
            return res.status(400).json({
                errors: validateFn.errors.map((error) => error.message)
            });

        next();
    };

    update = (req, res, next) => {
        const { isValid, validateFn } = compareSchemas(
            schoolSchemaDTO,
            req.body
        );

        if (!isValid)
            return res.status(400).json({
                errors: validateFn.errors.map((error) => error.message)
            });

        next();
    };
}
