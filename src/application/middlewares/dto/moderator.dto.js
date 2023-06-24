import { valModSchema } from './schemas/moderator.js';

export class ModeratorDTO {
    login = (req, res, next) => {
        const isDTOValid = valModSchema(req.body);

        if (!isDTOValid)
            return res.status(400).json({
                errors: valModSchema.errors.map((error) => error.message)
            });

        next();
    };

    register = (req, res, next) => {
        const isDTOValid = valModSchema(req.body);

        if (!isDTOValid)
            return res.status(400).json({
                errors: valModSchema.errors.map((error) => error.message)
            });

        next();
    };

    updatePassword = (req, res, next) => {};

    updateEmail = (req, res, next) => {};

    delete = (req, res, next) => {};
}
