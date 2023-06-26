import { compareSchemas } from '#lib/ajv.js';
import { loginModSchema, registerModSchema } from './schemas/moderator.js';

export class ModeratorDTO {
    register = (req, res, next) => {
        const { isValid, validateFn } = compareSchemas(
            registerModSchema,
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
            loginModSchema,
            req.body
        );

        if (!isValid)
            return res.status(400).json({
                errors: validateFn.errors.map((error) => error.message)
            });

        next();
    };

    updatePassword = (req, res, next) => {};

    updateEmail = (req, res, next) => {};

    delete = (req, res, next) => {};
}
