import {
    loginSchemaDTO,
    registerSchemaDTO,
    updateEmailSchemaDTO,
    updatePasswordSchemaDTO
} from '#application/middlewares/dto/schemas/moderator.schema.dto.js';
import { compareSchemas } from '#lib/ajv.js';

export class ModeratorDTO {
    register = (req, res, next) => {
        const { isValid, validateFn } = compareSchemas(
            registerSchemaDTO,
            req.body
        );

        if (!isValid)
            return res.status(400).json({
                errors: validateFn.errors.map((error) => error.message)
            });

        next();
    };

    login = (req, res, next) => {
        const { isValid, validateFn } = compareSchemas(
            loginSchemaDTO,
            req.body
        );

        if (!isValid)
            return res.status(400).json({
                errors: validateFn.errors.map((error) => error.message)
            });

        next();
    };

    updateEmail = (req, res, next) => {
        const { isValid, validateFn } = compareSchemas(
            updateEmailSchemaDTO,
            req.body
        );

        if (!isValid)
            return res.status(400).json({
                errors: validateFn.errors.map((error) => error.message)
            });

        next();
    };

    updatePassword = (req, res, next) => {
        const { isValid, validateFn } = compareSchemas(
            updatePasswordSchemaDTO,
            req.body
        );

        if (!isValid)
            return res.status(400).json({
                errors: validateFn.errors.map((error) => error.message)
            });

        next();
    };
}
